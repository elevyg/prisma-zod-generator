import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFieldUpdateOperationsInputObjectSchema,
  PostUpdateManyWithoutCategoryNestedInputObjectSchema,
} from './index';
export const CategoryUpdateInputObjectSchemaBase = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    posts: z
      .lazy(() => PostUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();
export const CategoryUpdateInputObjectSchema: z.ZodType<Prisma.CategoryUpdateInput> =
  CategoryUpdateInputObjectSchemaBase;
