import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostCreateNestedManyWithoutCategoryInputObjectSchema } from './index';
export const CategoryCreateInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    posts: z
      .lazy(() => PostCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> =
  CategoryCreateInputObjectSchemaBase;
