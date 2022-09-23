import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostUpdateWithoutCategoryInputObjectSchema,
  PostUncheckedUpdateWithoutCategoryInputObjectSchema,
  PostCreateWithoutCategoryInputObjectSchema,
  PostUncheckedCreateWithoutCategoryInputObjectSchema,
} from './index';
export const PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PostUpdateWithoutCategoryInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutCategoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();
export const PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCategoryInput> =
  PostUpsertWithWhereUniqueWithoutCategoryInputObjectSchemaBase;
