import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { NestedBigIntFilterObjectSchema } from './index';
export const BigIntFilterObjectSchemaBase = z
  .object({
    equals: z.bigint().optional(),
    in: z.bigint().array().optional(),
    notIn: z.bigint().array().optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z
      .union([z.bigint(), z.lazy(() => NestedBigIntFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const BigIntFilterObjectSchema: z.ZodType<Prisma.BigIntFilter> =
  BigIntFilterObjectSchemaBase;
