import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  CategoryCreateWithoutPostsInputObjectSchema,
  CategoryUncheckedCreateWithoutPostsInputObjectSchema,
  CategoryCreateOrConnectWithoutPostsInputObjectSchema,
  CategoryWhereUniqueInputObjectSchema,
} from './index';
export const CategoryCreateNestedOneWithoutPostsInputObjectSchemaBase = z.union(
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
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ],
);
export const CategoryCreateNestedOneWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutPostsInput> =
  CategoryCreateNestedOneWithoutPostsInputObjectSchemaBase;
