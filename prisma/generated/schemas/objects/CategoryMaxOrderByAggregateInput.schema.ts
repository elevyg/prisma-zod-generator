import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const CategoryMaxOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const CategoryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> =
  CategoryMaxOrderByAggregateInputObjectSchemaBase;
