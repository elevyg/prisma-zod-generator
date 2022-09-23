import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  CategoryUpdateWithoutPostsInputObjectSchema,
  CategoryUncheckedUpdateWithoutPostsInputObjectSchema,
  CategoryCreateWithoutPostsInputObjectSchema,
  CategoryUncheckedCreateWithoutPostsInputObjectSchema,
} from './index';
export const CategoryUpsertWithoutPostsInputObjectSchemaBase = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();
export const CategoryUpsertWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutPostsInput> =
  CategoryUpsertWithoutPostsInputObjectSchemaBase;
