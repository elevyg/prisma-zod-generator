import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const SingleOrderByWithRelationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const SingleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SingleOrderByWithRelationInput> =
  SingleOrderByWithRelationInputObjectSchemaBase;
