import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostScalarWhereInputObjectSchema,
  PostUpdateManyMutationInputObjectSchema,
  PostUncheckedUpdateManyWithoutPostsInputObjectSchema,
} from './index';
export const PostUpdateManyWithWhereWithoutCategoryInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateManyMutationInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateManyWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();
export const PostUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCategoryInput> =
  PostUpdateManyWithWhereWithoutCategoryInputObjectSchemaBase;
