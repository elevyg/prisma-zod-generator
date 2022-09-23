import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  SortOrderInputObjectSchema,
  PostOrderByRelationAggregateInputObjectSchema,
} from './index';
export const UserOrderByWithRelationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    name: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    posts: z
      .lazy(() => PostOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  UserOrderByWithRelationInputObjectSchemaBase;
