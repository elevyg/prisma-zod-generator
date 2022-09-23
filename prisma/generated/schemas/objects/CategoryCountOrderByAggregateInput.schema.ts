import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const CategoryCountOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const CategoryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> =
  CategoryCountOrderByAggregateInputObjectSchemaBase;
