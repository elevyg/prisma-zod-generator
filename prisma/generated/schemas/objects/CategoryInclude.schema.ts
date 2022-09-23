import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FindManyPostSchema } from '../index';
import './index';

export const CategoryIncludeObjectSchemaBase = z.object({
  posts: z.union([z.lazy(() => FindManyPostSchema), z.boolean()]).optional(),
});
export const CategoryIncludeObjectSchema: z.ZodType<Prisma.CategoryInclude> =
  CategoryIncludeObjectSchemaBase;
