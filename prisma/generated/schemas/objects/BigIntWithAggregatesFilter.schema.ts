import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  NestedBigIntWithAggregatesFilterObjectSchema,
  NestedIntFilterObjectSchema,
  NestedFloatFilterObjectSchema,
  NestedBigIntFilterObjectSchema,
} from './index';
export const BigIntWithAggregatesFilterObjectSchemaBase = z
  .object({
    equals: z.bigint().optional(),
    in: z.bigint().array().optional(),
    notIn: z.bigint().array().optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z
      .union([
        z.bigint(),
        z.lazy(() => NestedBigIntWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
    _sum: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
  })
  .strict();
export const BigIntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> =
  BigIntWithAggregatesFilterObjectSchemaBase;
