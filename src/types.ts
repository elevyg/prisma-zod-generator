import { DMMF as PrismaDMMF } from '@prisma/client/runtime';
import { SourceFile } from 'ts-morph';

export type TransformerParams = {
  sourceFile: SourceFile;
  enumType?: PrismaDMMF.SchemaEnum;
  fields?: (PrismaDMMF.SchemaArg | PrismaDMMF.Field)[];
  name?: string;
  isDefaultPrismaClientOutput?: boolean;
  prismaClientOutputPath?: string;
};
