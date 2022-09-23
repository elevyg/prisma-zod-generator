import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const CategoryCreateWithoutPostsInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();
export const CategoryCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutPostsInput> =
  CategoryCreateWithoutPostsInputObjectSchemaBase;
