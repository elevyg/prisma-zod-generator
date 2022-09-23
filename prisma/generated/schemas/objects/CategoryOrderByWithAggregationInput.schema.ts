import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  CategoryCountOrderByAggregateInputObjectSchema,
  CategoryMaxOrderByAggregateInputObjectSchema,
  CategoryMinOrderByAggregateInputObjectSchema,
} from './index';
export const CategoryOrderByWithAggregationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    _count: z
      .lazy(() => CategoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CategoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CategoryMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();
export const CategoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> =
  CategoryOrderByWithAggregationInputObjectSchemaBase;
