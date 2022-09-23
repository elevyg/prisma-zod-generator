import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const SingleCountOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const SingleCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SingleCountOrderByAggregateInput> =
  SingleCountOrderByAggregateInputObjectSchemaBase;
