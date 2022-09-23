import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  SingleCountOrderByAggregateInputObjectSchema,
  SingleMaxOrderByAggregateInputObjectSchema,
  SingleMinOrderByAggregateInputObjectSchema,
} from './index';
export const SingleOrderByWithAggregationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    _count: z
      .lazy(() => SingleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SingleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SingleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();
export const SingleOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SingleOrderByWithAggregationInput> =
  SingleOrderByWithAggregationInputObjectSchemaBase;
