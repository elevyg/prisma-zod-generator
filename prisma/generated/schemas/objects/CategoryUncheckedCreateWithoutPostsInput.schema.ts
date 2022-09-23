import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const CategoryUncheckedCreateWithoutPostsInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();
export const CategoryUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutPostsInput> =
  CategoryUncheckedCreateWithoutPostsInputObjectSchemaBase;
