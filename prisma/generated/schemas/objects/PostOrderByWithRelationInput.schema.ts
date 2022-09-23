import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  SortOrderInputObjectSchema,
  UserOrderByWithRelationInputObjectSchema,
  CategoryOrderByWithRelationInputObjectSchema,
} from './index';
export const PostOrderByWithRelationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    content: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    tags: SortOrderSchema.optional(),
    info: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    published: SortOrderSchema.optional(),
    viewCount: SortOrderSchema.optional(),
    author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    authorId: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    categoryId: z
      .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
      .optional(),
    likes: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
  })
  .strict();
export const PostOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> =
  PostOrderByWithRelationInputObjectSchemaBase;
