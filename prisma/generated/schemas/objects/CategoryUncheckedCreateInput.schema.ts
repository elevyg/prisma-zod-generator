import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './index';
export const CategoryUncheckedCreateInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    posts: z
      .lazy(() => PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> =
  CategoryUncheckedCreateInputObjectSchemaBase;
