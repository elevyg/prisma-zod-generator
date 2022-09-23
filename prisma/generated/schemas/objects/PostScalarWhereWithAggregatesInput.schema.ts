import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostStatusSchema } from '../enums';
import {
  StringWithAggregatesFilterObjectSchema,
  DateTimeWithAggregatesFilterObjectSchema,
  StringNullableWithAggregatesFilterObjectSchema,
  StringNullableListFilterObjectSchema,
  JsonNullableWithAggregatesFilterObjectSchema,
  BoolWithAggregatesFilterObjectSchema,
  IntWithAggregatesFilterObjectSchema,
  BigIntWithAggregatesFilterObjectSchema,
  EnumPostStatusWithAggregatesFilterObjectSchema,
} from './index';
export const PostScalarWhereWithAggregatesInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    info: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
    published: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    viewCount: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    authorId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    categoryId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    likes: z
      .union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPostStatusWithAggregatesFilterObjectSchema),
        PostStatusSchema,
      ])
      .optional(),
  })
  .strict();
export const PostScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> =
  PostScalarWhereWithAggregatesInputObjectSchemaBase;
