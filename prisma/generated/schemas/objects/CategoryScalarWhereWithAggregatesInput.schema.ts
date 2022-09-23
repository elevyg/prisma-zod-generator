import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { StringWithAggregatesFilterObjectSchema } from './index';
export const CategoryScalarWhereWithAggregatesInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema)
          .array(),
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
export const CategoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> =
  CategoryScalarWhereWithAggregatesInputObjectSchemaBase;
