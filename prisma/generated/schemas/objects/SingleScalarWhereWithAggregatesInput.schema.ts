import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { StringWithAggregatesFilterObjectSchema } from './index';
export const SingleScalarWhereWithAggregatesInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => SingleScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SingleScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SingleScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SingleScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SingleScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const SingleScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SingleScalarWhereWithAggregatesInput> =
  SingleScalarWhereWithAggregatesInputObjectSchemaBase;
