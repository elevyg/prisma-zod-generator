import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const CategoryCreateManyInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();
export const CategoryCreateManyInputObjectSchema: z.ZodType<Prisma.CategoryCreateManyInput> =
  CategoryCreateManyInputObjectSchemaBase;
