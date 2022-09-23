import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostStatusSchema } from '../enums';
import {
  NestedIntFilterObjectSchema,
  NestedEnumPostStatusFilterObjectSchema,
} from './index';
export const NestedEnumPostStatusWithAggregatesFilterObjectSchemaBase = z
  .object({
    equals: PostStatusSchema.optional(),
    in: PostStatusSchema.array().optional(),
    notIn: PostStatusSchema.array().optional(),
    not: z
      .union([
        PostStatusSchema,
        z.lazy(() => NestedEnumPostStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPostStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPostStatusFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumPostStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPostStatusWithAggregatesFilter> =
  NestedEnumPostStatusWithAggregatesFilterObjectSchemaBase;
