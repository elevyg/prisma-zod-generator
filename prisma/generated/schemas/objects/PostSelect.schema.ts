import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../index';
import { UserArgsObjectSchema, CategoryArgsObjectSchema } from './index';

export const PostSelectObjectSchemaBase = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  tags: z.boolean().optional(),
  info: z.boolean().optional(),
  published: z.boolean().optional(),
  viewCount: z.boolean().optional(),
  author: z.union([z.lazy(() => UserArgsObjectSchema), z.boolean()]).optional(),
  authorId: z.boolean().optional(),
  category: z
    .union([z.lazy(() => CategoryArgsObjectSchema), z.boolean()])
    .optional(),
  categoryId: z.boolean().optional(),
  likes: z.boolean().optional(),
  status: z.boolean().optional(),
});
export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> =
  PostSelectObjectSchemaBase;
