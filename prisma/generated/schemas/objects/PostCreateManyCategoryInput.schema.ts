import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableJsonNullValueInputSchema, PostStatusSchema } from '../enums';
import { PostCreatetagsInputObjectSchema } from './index';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

export const PostCreateManyCategoryInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    tags: z
      .union([
        z.lazy(() => PostCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    info: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
    published: z.boolean().optional(),
    viewCount: z.number().optional(),
    authorId: z.string().optional().nullable(),
    likes: z.bigint(),
    status: PostStatusSchema.optional(),
  })
  .strict();
export const PostCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.PostCreateManyCategoryInput> =
  PostCreateManyCategoryInputObjectSchemaBase;
