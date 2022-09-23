import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const SingleMinOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const SingleMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SingleMinOrderByAggregateInput> =
  SingleMinOrderByAggregateInputObjectSchemaBase;
