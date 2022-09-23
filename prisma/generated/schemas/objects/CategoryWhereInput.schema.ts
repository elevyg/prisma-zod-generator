import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFilterObjectSchema,
  PostListRelationFilterObjectSchema,
} from './index';
export const CategoryWhereInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  })
  .strict();
export const CategoryWhereInputObjectSchema: z.ZodType<Prisma.CategoryWhereInput> =
  CategoryWhereInputObjectSchemaBase;
