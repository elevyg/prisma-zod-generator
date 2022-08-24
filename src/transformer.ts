import type { DMMF as PrismaDMMF } from '@prisma/generator-helper';
import path from 'path';
import { TransformerParams } from './types';
import { writeFileSafely } from './utils/writeFileSafely';
import { appendFileSafely } from './utils/appendFileSafely';

export default class Transformer {
  name: string;
  fields: (PrismaDMMF.SchemaArg | PrismaDMMF.Field)[];
  schemaImports = new Set<string>();
  modelOperations: PrismaDMMF.ModelMapping[];
  enumTypes: PrismaDMMF.SchemaEnum[];
  static enumNames: string[] = [];
  private static outputPath: string = './generated';
  private hasJson = false;
  static isDefaultPrismaClientOutput?: boolean;
  static prismaClientOutputPath?: string;

  constructor(params: TransformerParams) {
    this.name = params.name ?? '';
    this.fields = params.fields ?? [];
    this.modelOperations = params.modelOperations ?? [];
    this.enumTypes = params.enumTypes ?? [];
  }

  static setOutputPath(outPath: string) {
    this.outputPath = outPath;
  }

  static getOutputPath() {
    return this.outputPath;
  }

  addSchemaImport(name: string) {
    this.schemaImports.add(name);
  }

  getAllSchemaImports() {
    return [...this.schemaImports]
      .map((name) =>
        Transformer.enumNames.includes(name)
          ? `import { ${name}Schema } from '../enums/${name}.schema';`
          : `import { ${name}ObjectSchema } from './${name}.schema';`,
      )
      .join(';\r\n');
  }

  getPrismaStringLine(
    field: PrismaDMMF.SchemaArg,
    inputType: PrismaDMMF.SchemaArgInputType,
    inputsLength: number,
  ) {
    const isEnum = inputType.location === 'enumTypes';

    let objectSchemaLine = `${inputType.type}ObjectSchema`;
    let enumSchemaLine = `${inputType.type}Schema`;

    const schema =
      inputType.type === this.name
        ? objectSchemaLine
        : isEnum
        ? enumSchemaLine
        : objectSchemaLine;

    const arr = inputType.isList ? '.array()' : '';

    const opt = !field.isRequired ? '.optional()' : '';

    return inputsLength === 1
      ? `  ${field.name}: z.lazy(() => ${schema})${arr}${opt}`
      : `z.lazy(() => ${schema})${arr}${opt}`;
  }

  wrapWithZodValidators(
    mainValidator: string,
    field: PrismaDMMF.SchemaArg,
    inputType: PrismaDMMF.SchemaArgInputType,
  ) {
    let line: string = '';
    line = mainValidator;

    if (inputType.isList) {
      line += '.array()';
    }

    if (!field.isRequired) {
      line += '.optional()';
    }

    return line;
  }

  getObjectSchemaLine(
    field: PrismaDMMF.SchemaArg,
  ): [string, PrismaDMMF.SchemaArg, boolean][] {
    let lines = field.inputTypes;

    if (lines.length === 0) {
      return [];
    }

    let alternatives = lines.reduce<string[]>((result, inputType) => {
      if (inputType.type === 'String') {
        result.push(this.wrapWithZodValidators('z.string()', field, inputType));
      } else if (
        inputType.type === 'Int' ||
        inputType.type === 'Float' ||
        inputType.type === 'Decimal'
      ) {
        result.push(this.wrapWithZodValidators('z.number()', field, inputType));
      } else if (inputType.type === 'BigInt') {
        result.push(this.wrapWithZodValidators('z.bigint()', field, inputType));
      } else if (inputType.type === 'Boolean') {
        result.push(
          this.wrapWithZodValidators('z.boolean()', field, inputType),
        );
      } else if (inputType.type === 'DateTime') {
        result.push(this.wrapWithZodValidators('z.date()', field, inputType));
      } else if (inputType.type === 'Json') {
        this.hasJson = true;

        result.push(this.wrapWithZodValidators('jsonSchema', field, inputType));
      } else {
        const isEnum = inputType.location === 'enumTypes';

        if (inputType.namespace === 'prisma' || isEnum) {
          if (
            inputType.type !== this.name &&
            typeof inputType.type === 'string'
          ) {
            this.addSchemaImport(inputType.type);
          }

          result.push(this.getPrismaStringLine(field, inputType, lines.length));
        }
      }

      return result;
    }, []);

    if (alternatives.length === 0) {
      return [];
    }

    if (alternatives.length > 1) {
      alternatives = alternatives.map((alter) =>
        alter.replace('.optional()', ''),
      );
    }

    const fieldName = alternatives.some((alt) => alt.includes(':'))
      ? ''
      : `  ${field.name}:`;

    const opt = !field.isRequired ? '.optional()' : '';

    let resString =
      alternatives.length === 1
        ? alternatives.join(',\r\n')
        : `z.union([${alternatives.join(',\r\n')}])${opt}`;

    if (field.isNullable) {
      resString += '.nullable()';
    }

    return [[`  ${fieldName} ${resString} `, field, true]];
  }

  getFieldValidators(
    zodStringWithMainType: string,
    field: PrismaDMMF.SchemaArg,
  ) {
    const { isRequired, isNullable } = field;

    if (!isRequired) {
      zodStringWithMainType += '.optional()';
    }

    if (isNullable) {
      zodStringWithMainType += '.nullable()';
    }

    return zodStringWithMainType;
  }

  getImportZod() {
    let zodImportStatement = "import { z } from 'zod';";
    zodImportStatement += '\n';
    return zodImportStatement;
  }

  getImportPrisma() {
    let prismaClientPath = '@prisma/client';
    if (Transformer.isDefaultPrismaClientOutput) {
      prismaClientPath = Transformer.prismaClientOutputPath ?? '';
      prismaClientPath = path
        .relative(
          path.join(Transformer.outputPath, 'schemas', 'objects'),
          prismaClientPath,
        )
        .split(path.sep)
        .join(path.posix.sep);
    }
    return `import type { Prisma } from '${prismaClientPath}';\n\n`;
  }

  getJsonSchemaImplementation() {
    let jsonShemaImplementation = '';

    if (this.hasJson) {
      jsonShemaImplementation += `\n`;
      jsonShemaImplementation += `const literalSchema = z.union([z.string(), z.number(), z.boolean()]);\n`;
      jsonShemaImplementation += `const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>\n`;
      jsonShemaImplementation += `  z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])\n`;
      jsonShemaImplementation += `);\n\n`;
    }

    return jsonShemaImplementation;
  }

  getImportsForObjectSchemas() {
    let imports = this.getImportZod();
    imports += this.getAllSchemaImports();
    imports += '\n\n';
    return imports;
  }

  getImportsForSchemas(additionalImports: string[]) {
    let imports = this.getImportZod();
    imports += [...additionalImports].join(';\r\n');
    imports += '\n\n';
    return imports;
  }

  addExportObjectSchema(schema: string, name: string) {
    const schemaName = `${name}ObjectSchema`;
    const end = `export const ${schemaName}: z.ZodType<Prisma.${name}> = ${schemaName}Base`;
    return `export const ${schemaName}Base = ${schema};\n\n ${end}`;
  }

  addExportSchema(schema: string, name: string) {
    return `export const ${name}Schema = ${schema}`;
  }

  wrapWithZodObject(zodStringFields: string | string[]) {
    let wrapped = '';

    wrapped += 'z.object({';
    wrapped += '\n';
    wrapped += '  ' + zodStringFields;
    wrapped += '\n';
    wrapped += '})';
    return wrapped;
  }

  wrapWithZodOUnion(zodStringFields: string[]) {
    let wrapped = '';

    wrapped += 'z.union([';
    wrapped += '\n';
    wrapped += '  ' + zodStringFields.join(',');
    wrapped += '\n';
    wrapped += '])';
    return wrapped;
  }

  addFinalWrappers({ zodStringFields }: { zodStringFields: string[] }) {
    const fields = [...zodStringFields];

    const shouldWrapWithUnion = fields.some(
      (field) =>
        // TODO handle other cases if any
        // field.includes('create:') ||
        field.includes('connectOrCreate:') || field.includes('connect:'),
    );

    if (!shouldWrapWithUnion) {
      return this.wrapWithZodObject(fields) + '.strict()';
    }

    const wrapped = fields.map(
      (field) => this.wrapWithZodObject(field) + '.strict()',
    );

    return this.wrapWithZodOUnion(wrapped);
  }

  getFinalForm(zodStringFields: string[]) {
    const objectSchema = `${this.addExportObjectSchema(
      this.addFinalWrappers({ zodStringFields }),
      this.name,
    )}\n`;

    const prismaImport = this.getImportPrisma();

    const json = this.getJsonSchemaImplementation();

    return `${this.getImportsForObjectSchemas()}${prismaImport}${json}${objectSchema}`;
  }

  async printObjectSchemas() {
    const fields = this.fields as PrismaDMMF.SchemaArg[];
    const objectSchemaLines = fields
      .map((field) => this.getObjectSchemaLine(field))
      .flatMap((item) => item);
    const zodStringFields = objectSchemaLines.map((item) => {
      const [zodStringWithMainType, field, skipValidators] = item;

      const value = skipValidators
        ? zodStringWithMainType
        : this.getFieldValidators(zodStringWithMainType, field);

      return value.trim();
    });

    await writeFileSafely(
      path.join(
        Transformer.outputPath,
        `schemas/objects/${this.name}.schema.ts`,
      ),

      this.getFinalForm(zodStringFields),
    );

    await appendFileSafely(
      path.join(Transformer.outputPath, `schemas/objects/index.ts`),
      `export * from './${this.name}.schema'\n`,
    );
  }

  async printSelectObjectSchemas() {
    const fields = this.fields as PrismaDMMF.Field[];
    const relatedFields = fields.filter((field) => field.kind === 'object');
    const fieldSchemas = fields.reduce((prev, field) => {
      if (field.kind === 'object') {
        if (field.isList) {
          return `${prev}${field.name}: z.union([z.lazy(() => ${field.type}FindManySchema), z.boolean()]).optional(), `;
        } else {
          return `${prev}${field.name}: z.union([z.lazy(() => ${field.type}ArgsObjectSchema), z.boolean()]).optional(), `;
        }
      } else {
        return `${prev}${field.name}: z.boolean().optional(), `;
      }
    }, ``);
    const imports = [
      ...new Set(
        relatedFields.flatMap((field) => {
          if (field.isList) {
            return `import { ${field.type}FindManySchema } from '../findMany${field.type}.schema';`;
          } else {
            return `import { ${field.type}ArgsObjectSchema } from './${field.type}Args.schema';`;
          }
        }),
      ),
      this.getImportPrisma(),
    ];

    await writeFileSafely(
      path.join(
        Transformer.outputPath,
        `schemas/objects/${this.name}Select.schema.ts`,
      ),
      `${this.getImportsForSchemas(imports)}${this.addExportObjectSchema(
        `z.object({ ${fieldSchemas} })`,
        `${this.name}Select`,
      )}`,
    );

    await appendFileSafely(
      path.join(Transformer.outputPath, `schemas/objects/index.ts`),
      `export * from './${this.name}Select.schema'\n`,
    );
  }

  async printIncludeObjectSchemas() {
    const fields = this.fields as PrismaDMMF.Field[];
    const relatedFields = fields.filter((field) => field.kind === 'object');
    const fieldSchemas = relatedFields.reduce((prev, field) => {
      if (field.isList) {
        return `${prev}${field.name}: z.union([z.lazy(() => ${field.type}FindManySchema), z.boolean()]).optional(), `;
      } else {
        return `${prev}${field.name}: z.union([z.lazy(() => ${field.type}ArgsObjectSchema), z.boolean()]).optional(), `;
      }
    }, ``);
    const imports = [
      ...new Set(
        relatedFields.flatMap((field) => {
          if (field.isList) {
            return `import { ${field.type}FindManySchema } from '../findMany${field.type}.schema';`;
          } else {
            return `import { ${field.type}ArgsObjectSchema } from './${field.type}Args.schema';`;
          }
        }),
      ),
      this.getImportPrisma(),
    ];

    await writeFileSafely(
      path.join(
        Transformer.outputPath,
        `schemas/objects/${this.name}Include.schema.ts`,
      ),
      `${this.getImportsForSchemas(imports)}${this.addExportObjectSchema(
        `z.object({ ${fieldSchemas} })`,
        `${this.name}Include`,
      )}`,
    );

    await appendFileSafely(
      path.join(Transformer.outputPath, `schemas/objects/index.ts`),
      `export * from './${this.name}Include.schema'\n`,
    );
  }

  async printArgsObjectSchemas() {
    const imports = [
      `import { ${this.name}SelectObjectSchema } from './${this.name}Select.schema'`,
      `import { ${this.name}IncludeObjectSchema } from './${this.name}Include.schema'`,
      this.getImportPrisma(),
    ];

    await writeFileSafely(
      path.join(
        Transformer.outputPath,
        `schemas/objects/${this.name}Args.schema.ts`,
      ),
      `${this.getImportsForSchemas(imports)}${this.addExportObjectSchema(
        `z.object({ select: z.lazy(() => ${this.name}SelectObjectSchema).optional(), include: z.lazy(() => ${this.name}IncludeObjectSchema).optional() })`,
        `${this.name}Args`,
      )}`,
    );

    await appendFileSafely(
      path.join(Transformer.outputPath, `schemas/objects/index.ts`),
      `export * from './${this.name}Args.schema'\n`,
    );
  }

  async printModelSchemas() {
    await appendFileSafely(
      path.join(Transformer.outputPath, `schemas/index.ts`),
      `export * from './enums'\nexport * from './objects'\n`,
    );

    for (const model of this.modelOperations) {
      const {
        model: modelName,
        findUnique,
        findFirst,
        findMany,
        // @ts-ignore
        createOne,
        createMany,
        // @ts-ignore
        deleteOne,
        // @ts-ignore
        updateOne,
        deleteMany,
        updateMany,
        // @ts-ignore
        upsertOne,
        aggregate,
        groupBy,
      } = model;

      if (findUnique) {
        const imports = [
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${findUnique}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereUniqueInputObjectSchema, select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}FindUnique`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${findUnique}.schema'\n`,
        );
      }

      if (findFirst) {
        const imports = [
          `import { ${modelName}WhereInputObjectSchema } from './objects/${modelName}WhereInput.schema'`,
          `import { ${modelName}OrderByWithRelationInputObjectSchema } from './objects/${modelName}OrderByWithRelationInput.schema'`,
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
          `import { ${modelName}ScalarFieldEnumSchema } from './enums/${modelName}ScalarFieldEnum.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${findFirst}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereInputObjectSchema.optional(), orderBy: ${modelName}OrderByWithRelationInputObjectSchema.optional(), cursor: ${modelName}WhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(${modelName}ScalarFieldEnumSchema).optional(), select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}FindFirst`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${findFirst}.schema'\n`,
        );
      }

      if (findMany) {
        const imports = [
          `import { ${modelName}WhereInputObjectSchema } from './objects/${modelName}WhereInput.schema'`,
          `import { ${modelName}OrderByWithRelationInputObjectSchema } from './objects/${modelName}OrderByWithRelationInput.schema'`,
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
          `import { ${modelName}ScalarFieldEnumSchema } from './enums/${modelName}ScalarFieldEnum.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${findMany}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereInputObjectSchema.optional(), orderBy: ${modelName}OrderByWithRelationInputObjectSchema.optional(), cursor: ${modelName}WhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(${modelName}ScalarFieldEnumSchema).optional(), select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}FindMany`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${findMany}.schema'\n`,
        );
      }

      if (createOne) {
        const imports = [
          `import { ${modelName}CreateInputObjectSchema } from './objects/${modelName}CreateInput.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${createOne}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ data: ${modelName}CreateInputObjectSchema, select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}CreateOne`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${createOne}.schema'\n`,
        );
      }

      if (createMany) {
        const imports = [
          `import { ${modelName}CreateManyInputObjectSchema } from './objects/${modelName}CreateManyInput.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${createMany}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ data: ${modelName}CreateManyInputObjectSchema })`,
            `${modelName}CreateMany`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${createMany}.schema'\n`,
        );
      }

      if (deleteOne) {
        const imports = [
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${deleteOne}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereUniqueInputObjectSchema, select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}DeleteOne`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${deleteOne}.schema'\n`,
        );
      }

      if (deleteMany) {
        const imports = [
          `import { ${modelName}WhereInputObjectSchema } from './objects/${modelName}WhereInput.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${deleteMany}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereInputObjectSchema.optional()  })`,
            `${modelName}DeleteMany`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${deleteMany}.schema'\n`,
        );
      }

      if (updateOne) {
        const imports = [
          `import { ${modelName}UpdateInputObjectSchema } from './objects/${modelName}UpdateInput.schema'`,
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${updateOne}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ data: ${modelName}UpdateInputObjectSchema, where: ${modelName}WhereUniqueInputObjectSchema, select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}UpdateOne`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${updateOne}.schema'\n`,
        );
      }

      if (updateMany) {
        const imports = [
          `import { ${modelName}UpdateManyMutationInputObjectSchema } from './objects/${modelName}UpdateManyMutationInput.schema'`,
          `import { ${modelName}WhereInputObjectSchema } from './objects/${modelName}WhereInput.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${updateMany}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ data: ${modelName}UpdateManyMutationInputObjectSchema, where: ${modelName}WhereInputObjectSchema.optional()  })`,
            `${modelName}UpdateMany`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${updateMany}.schema'\n`,
        );
      }

      if (upsertOne) {
        const imports = [
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
          `import { ${modelName}CreateInputObjectSchema } from './objects/${modelName}CreateInput.schema'`,
          `import { ${modelName}UpdateInputObjectSchema } from './objects/${modelName}UpdateInput.schema'`,
          `import { ${modelName}SelectObjectSchema } from './objects/${modelName}Select.schema'`,
          `import { ${modelName}IncludeObjectSchema } from './objects/${modelName}Include.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${upsertOne}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereUniqueInputObjectSchema, create: ${modelName}CreateInputObjectSchema, update: ${modelName}UpdateInputObjectSchema, select: z.lazy(() => ${modelName}SelectObjectSchema).optional(), include: z.lazy(() => ${modelName}IncludeObjectSchema).optional() })`,
            `${modelName}Upsert`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${upsertOne}.schema'\n`,
        );
      }

      if (aggregate) {
        const imports = [
          `import { ${modelName}WhereInputObjectSchema } from './objects/${modelName}WhereInput.schema'`,
          `import { ${modelName}OrderByWithRelationInputObjectSchema } from './objects/${modelName}OrderByWithRelationInput.schema'`,
          `import { ${modelName}WhereUniqueInputObjectSchema } from './objects/${modelName}WhereUniqueInput.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${aggregate}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereInputObjectSchema.optional(), orderBy: ${modelName}OrderByWithRelationInputObjectSchema.optional(), cursor: ${modelName}WhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional()  })`,
            `${modelName}Aggregate`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${aggregate}.schema'\n`,
        );
      }

      if (groupBy) {
        const imports = [
          `import { ${modelName}WhereInputObjectSchema } from './objects/${modelName}WhereInput.schema'`,
          `import { ${modelName}OrderByWithAggregationInputObjectSchema } from './objects/${modelName}OrderByWithAggregationInput.schema'`,
          `import { ${modelName}ScalarWhereWithAggregatesInputObjectSchema } from './objects/${modelName}ScalarWhereWithAggregatesInput.schema'`,
          `import { ${modelName}ScalarFieldEnumSchema } from './enums/${modelName}ScalarFieldEnum.schema'`,
        ];
        await writeFileSafely(
          path.join(Transformer.outputPath, `schemas/${groupBy}.schema.ts`),
          `${this.getImportsForSchemas(imports)}${this.addExportSchema(
            `z.object({ where: ${modelName}WhereInputObjectSchema.optional(), orderBy: ${modelName}OrderByWithAggregationInputObjectSchema, having: ${modelName}ScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(${modelName}ScalarFieldEnumSchema)  })`,
            `${modelName}GroupBy`,
          )}`,
        );

        await appendFileSafely(
          path.join(Transformer.outputPath, `schemas/index.ts`),
          `export * from './${groupBy}.schema'\n`,
        );
      }
    }
  }

  async printEnumSchemas() {
    for (const enumType of this.enumTypes) {
      const { name, values } = enumType;

      await writeFileSafely(
        path.join(Transformer.outputPath, `schemas/enums/${name}.schema.ts`),
        `${this.getImportZod()}\n${this.addExportSchema(
          `z.enum(${JSON.stringify(values)})`,
          `${name}`,
        )}`,
      );

      await appendFileSafely(
        path.join(Transformer.outputPath, `schemas/enums/index.ts`),
        `export * from './${name}.schema'\n`,
      );
    }
  }
}
