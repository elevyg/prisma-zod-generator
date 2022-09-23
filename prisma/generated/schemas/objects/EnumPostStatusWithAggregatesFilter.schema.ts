import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostStatusSchema } from '../enums';
import {
  NestedEnumPostStatusWithAggregatesFilterObjectSchema,
  NestedIntFilterObjectSchema,
  NestedEnumPostStatusFilterObjectSchema,
} from './index';
export const EnumPostStatusWithAggregatesFilterObjectSchemaBase = z
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
export const EnumPostStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPostStatusWithAggregatesFilter> =
  EnumPostStatusWithAggregatesFilterObjectSchemaBase;
