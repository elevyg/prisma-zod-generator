import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostCreateWithoutCategoryInputObjectSchema,
  PostUncheckedCreateWithoutCategoryInputObjectSchema,
  PostCreateOrConnectWithoutCategoryInputObjectSchema,
  PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
  PostCreateManyCategoryInputEnvelopeObjectSchema,
  PostWhereUniqueInputObjectSchema,
  PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
  PostUpdateManyWithWhereWithoutCategoryInputObjectSchema,
  PostScalarWhereInputObjectSchema,
} from './index';
export const PostUpdateManyWithoutCategoryNestedInputObjectSchemaBase = z.union(
  [
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
        upsert: z
          .union([
            z.lazy(
              () => PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
              )
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
        set: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => PostUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => PostUpdateManyWithWhereWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => PostScalarWhereInputObjectSchema),
            z.lazy(() => PostScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ],
);
export const PostUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithoutCategoryNestedInput> =
  PostUpdateManyWithoutCategoryNestedInputObjectSchemaBase;
