import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  SortOrderInputObjectSchema,
  PostCountOrderByAggregateInputObjectSchema,
  PostAvgOrderByAggregateInputObjectSchema,
  PostMaxOrderByAggregateInputObjectSchema,
  PostMinOrderByAggregateInputObjectSchema,
  PostSumOrderByAggregateInputObjectSchema,
} from './index';
export const PostOrderByWithAggregationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    content: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    tags: SortOrderSchema.optional(),
    info: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    published: SortOrderSchema.optional(),
    viewCount: SortOrderSchema.optional(),
    authorId: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    categoryId: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    likes: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    _count: z.lazy(() => PostCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PostAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PostMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PostMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PostSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();
export const PostOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> =
  PostOrderByWithAggregationInputObjectSchemaBase;
