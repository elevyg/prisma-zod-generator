import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../index';
import { UserArgsObjectSchema, CategoryArgsObjectSchema } from './index';

export const PostIncludeObjectSchemaBase = z.object({
  author: z.union([z.lazy(() => UserArgsObjectSchema), z.boolean()]).optional(),
  category: z
    .union([z.lazy(() => CategoryArgsObjectSchema), z.boolean()])
    .optional(),
});
export const PostIncludeObjectSchema: z.ZodType<Prisma.PostInclude> =
  PostIncludeObjectSchemaBase;
