import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  SortOrderInputObjectSchema,
  UserCountOrderByAggregateInputObjectSchema,
  UserMaxOrderByAggregateInputObjectSchema,
  UserMinOrderByAggregateInputObjectSchema,
} from './index';
export const UserOrderByWithAggregationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    name: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();
export const UserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  UserOrderByWithAggregationInputObjectSchemaBase;
