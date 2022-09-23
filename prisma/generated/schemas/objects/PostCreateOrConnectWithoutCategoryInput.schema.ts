import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostCreateWithoutCategoryInputObjectSchema,
  PostUncheckedCreateWithoutCategoryInputObjectSchema,
} from './index';
export const PostCreateOrConnectWithoutCategoryInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();
export const PostCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCategoryInput> =
  PostCreateOrConnectWithoutCategoryInputObjectSchemaBase;
