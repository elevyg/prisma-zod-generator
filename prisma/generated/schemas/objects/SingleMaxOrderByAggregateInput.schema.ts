import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const SingleMaxOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const SingleMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SingleMaxOrderByAggregateInput> =
  SingleMaxOrderByAggregateInputObjectSchemaBase;
