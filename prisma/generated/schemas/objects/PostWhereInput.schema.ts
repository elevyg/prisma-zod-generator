import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostStatusSchema } from '../enums';
import {
  StringFilterObjectSchema,
  DateTimeFilterObjectSchema,
  StringNullableFilterObjectSchema,
  StringNullableListFilterObjectSchema,
  JsonNullableFilterObjectSchema,
  BoolFilterObjectSchema,
  IntFilterObjectSchema,
  UserRelationFilterObjectSchema,
  UserWhereInputObjectSchema,
  CategoryRelationFilterObjectSchema,
  CategoryWhereInputObjectSchema,
  BigIntFilterObjectSchema,
  EnumPostStatusFilterObjectSchema,
} from './index';
export const PostWhereInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostWhereInputObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostWhereInputObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    info: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    published: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    viewCount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    author: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    authorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    categoryId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    likes: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    status: z
      .union([z.lazy(() => EnumPostStatusFilterObjectSchema), PostStatusSchema])
      .optional(),
  })
  .strict();
export const PostWhereInputObjectSchema: z.ZodType<Prisma.PostWhereInput> =
  PostWhereInputObjectSchemaBase;
