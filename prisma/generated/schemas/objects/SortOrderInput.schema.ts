import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema, NullsOrderSchema } from '../enums';
import './index';
export const SortOrderInputObjectSchemaBase = z
  .object({
    sort: SortOrderSchema,
    nulls: NullsOrderSchema.optional(),
  })
  .strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> =
  SortOrderInputObjectSchemaBase;
