import { parseEnvValue, getDMMF } from '@prisma/internals';
import { EnvValue, GeneratorOptions } from '@prisma/generator-helper';
import removeDir from './utils/removeDir';
import { promises as fs } from 'fs';
import Transformer from './transformer';
import { project } from './project';
import path from 'path';
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter';
import { formatFile } from './utils/formatFile';

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output as EnvValue);
  await removeDir(outputDir, false).catch(() => {
    console.error('No directory to remove');
  });
  await fs.mkdir(outputDir, { recursive: true });

  const prismaClientProvider = options.otherGenerators.find(
    (it) => parseEnvValue(it.provider) === 'prisma-client-js',
  );

  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider?.previewFeatures,
  });

  Transformer.isDefaultPrismaClientOutput =
    prismaClientProvider?.isCustomOutput ?? false;

  if (prismaClientProvider?.isCustomOutput) {
    Transformer.prismaClientOutputPath =
      prismaClientProvider?.output?.value ?? '';
  }

  Transformer.setOutputPath(outputDir);

  const routeFile = project.createSourceFile(
    path.resolve(outputDir, 'index.ts'),
  );

  const enumRouteFile = project.createSourceFile(
    path.resolve(outputDir, 'enums/index.ts'),
    undefined,
    {
      overwrite: true,
    },
  );

  const enumTypes = [
    ...prismaClientDmmf.schema.enumTypes.prisma,
    ...(prismaClientDmmf.schema.enumTypes.model ?? []),
  ];
  const enumNames = enumTypes.map((enumItem) => enumItem.name);
  Transformer.enumNames = enumNames ?? [];

  for (const enumType of enumTypes) {
    const enumsObj = new Transformer({
      enumType,
      sourceFile: project.createSourceFile(
        path.resolve(outputDir, `enums/${enumType.name}.ts`),
        undefined,
        { overwrite: true },
      ),
    });
    const sourceFile = enumsObj.printEnumSchemas();
    const formattedText = await formatFile(sourceFile.getFullText());
    sourceFile.replaceWithText(formattedText);

    enumRouteFile.addExportDeclaration({
      moduleSpecifier: `./${enumType.name}`,
    });
  }

  routeFile.addExportDeclaration({
    moduleSpecifier: './enums',
  });

  await project.save();
}
