import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  CategoryWhereUniqueInputObjectSchema,
  CategoryCreateWithoutPostsInputObjectSchema,
  CategoryUncheckedCreateWithoutPostsInputObjectSchema,
} from './index';
export const CategoryCreateOrConnectWithoutPostsInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();
export const CategoryCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutPostsInput> =
  CategoryCreateOrConnectWithoutPostsInputObjectSchemaBase;
