import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import { PostOrderByRelationAggregateInputObjectSchema } from './index';
export const CategoryOrderByWithRelationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    posts: z
      .lazy(() => PostOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();
export const CategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> =
  CategoryOrderByWithRelationInputObjectSchemaBase;
