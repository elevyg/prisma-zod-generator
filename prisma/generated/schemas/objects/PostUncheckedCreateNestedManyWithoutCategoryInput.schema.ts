import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostCreateWithoutCategoryInputObjectSchema,
  PostUncheckedCreateWithoutCategoryInputObjectSchema,
  PostCreateOrConnectWithoutCategoryInputObjectSchema,
  PostCreateManyCategoryInputEnvelopeObjectSchema,
  PostWhereUniqueInputObjectSchema,
} from './index';
export const PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchemaBase =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PostCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => PostCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => PostCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => PostCreateOrConnectWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => PostCreateManyCategoryInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);
export const PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutCategoryInput> =
  PostUncheckedCreateNestedManyWithoutCategoryInputObjectSchemaBase;
