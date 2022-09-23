import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostUpdateWithoutCategoryInputObjectSchema,
  PostUncheckedUpdateWithoutCategoryInputObjectSchema,
} from './index';
export const PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateWithoutCategoryInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();
export const PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCategoryInput> =
  PostUpdateWithWhereUniqueWithoutCategoryInputObjectSchemaBase;
