import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const StringNullableListFilterObjectSchemaBase = z
  .object({
    equals: z.string().array().optional().nullable(),
    has: z.string().optional().nullable(),
    hasEvery: z.string().array().optional(),
    hasSome: z.string().array().optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict();
export const StringNullableListFilterObjectSchema: z.ZodType<Prisma.StringNullableListFilter> =
  StringNullableListFilterObjectSchemaBase;
