import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFieldUpdateOperationsInputObjectSchema,
  PostUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
} from './index';
export const CategoryUncheckedUpdateInputObjectSchemaBase = z
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
      .lazy(() => PostUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();
export const CategoryUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> =
  CategoryUncheckedUpdateInputObjectSchemaBase;
