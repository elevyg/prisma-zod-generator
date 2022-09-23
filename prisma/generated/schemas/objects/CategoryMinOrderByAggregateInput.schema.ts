import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const CategoryMinOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const CategoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> =
  CategoryMinOrderByAggregateInputObjectSchemaBase;
