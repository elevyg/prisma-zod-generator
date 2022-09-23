import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { CategoryWhereInputObjectSchema } from './index';
export const CategoryRelationFilterObjectSchemaBase = z
  .object({
    is: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();
export const CategoryRelationFilterObjectSchema: z.ZodType<Prisma.CategoryRelationFilter> =
  CategoryRelationFilterObjectSchemaBase;
