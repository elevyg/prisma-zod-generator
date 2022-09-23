import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueFilterSchema } from '../enums';
import {
  NestedIntNullableFilterObjectSchema,
  NestedJsonNullableFilterObjectSchema,
} from './index';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

export const JsonNullableWithAggregatesFilterObjectSchemaBase = z
  .object({
    equals: z.union([jsonSchema, JsonNullValueFilterSchema]).optional(),
    path: z.string().array().optional(),
    string_contains: z.string().optional(),
    string_starts_with: z.string().optional(),
    string_ends_with: z.string().optional(),
    array_contains: jsonSchema.optional().nullable(),
    array_starts_with: jsonSchema.optional().nullable(),
    array_ends_with: jsonSchema.optional().nullable(),
    lt: jsonSchema.optional(),
    lte: jsonSchema.optional(),
    gt: jsonSchema.optional(),
    gte: jsonSchema.optional(),
    not: z.union([jsonSchema, JsonNullValueFilterSchema]).optional(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional(),
  })
  .strict();
export const JsonNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> =
  JsonNullableWithAggregatesFilterObjectSchemaBase;
