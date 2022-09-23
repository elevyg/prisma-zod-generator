import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  CategoryCreateWithoutPostsInputObjectSchema,
  CategoryUncheckedCreateWithoutPostsInputObjectSchema,
  CategoryCreateOrConnectWithoutPostsInputObjectSchema,
  CategoryUpsertWithoutPostsInputObjectSchema,
  CategoryWhereUniqueInputObjectSchema,
  CategoryUpdateWithoutPostsInputObjectSchema,
  CategoryUncheckedUpdateWithoutPostsInputObjectSchema,
} from './index';
export const CategoryUpdateOneWithoutPostsNestedInputObjectSchemaBase = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema),
            z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CategoryCreateOrConnectWithoutPostsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => CategoryUpsertWithoutPostsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema),
            z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ],
);
export const CategoryUpdateOneWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutPostsNestedInput> =
  CategoryUpdateOneWithoutPostsNestedInputObjectSchemaBase;
