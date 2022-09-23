import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FindManyPostSchema } from '../index';
import './index';

export const CategorySelectObjectSchemaBase = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  posts: z.union([z.lazy(() => FindManyPostSchema), z.boolean()]).optional(),
});
export const CategorySelectObjectSchema: z.ZodType<Prisma.CategorySelect> =
  CategorySelectObjectSchemaBase;
