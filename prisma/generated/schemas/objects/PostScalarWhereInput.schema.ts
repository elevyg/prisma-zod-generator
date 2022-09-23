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
  BigIntFilterObjectSchema,
  EnumPostStatusFilterObjectSchema,
} from './index';
export const PostScalarWhereInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostScalarWhereInputObjectSchema),
        z.lazy(() => PostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostScalarWhereInputObjectSchema),
        z.lazy(() => PostScalarWhereInputObjectSchema).array(),
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
    authorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
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
export const PostScalarWhereInputObjectSchema: z.ZodType<Prisma.PostScalarWhereInput> =
  PostScalarWhereInputObjectSchemaBase;
