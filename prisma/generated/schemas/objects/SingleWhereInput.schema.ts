import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { StringFilterObjectSchema } from './index';
export const SingleWhereInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => SingleWhereInputObjectSchema),
        z.lazy(() => SingleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SingleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SingleWhereInputObjectSchema),
        z.lazy(() => SingleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const SingleWhereInputObjectSchema: z.ZodType<Prisma.SingleWhereInput> =
  SingleWhereInputObjectSchemaBase;
