import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import {
  CategorySelectObjectSchema,
  CategoryIncludeObjectSchema,
} from './index';

export const CategoryArgsObjectSchemaBase = z.object({
  select: z.lazy(() => CategorySelectObjectSchema).optional(),
  include: z.lazy(() => CategoryIncludeObjectSchema).optional(),
});
export const CategoryArgsObjectSchema: z.ZodType<Prisma.CategoryArgs> =
  CategoryArgsObjectSchemaBase;
