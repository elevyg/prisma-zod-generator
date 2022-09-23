import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { StringFieldUpdateOperationsInputObjectSchema } from './index';
export const CategoryUncheckedUpdateWithoutPostsInputObjectSchemaBase = z
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
  })
  .strict();
export const CategoryUncheckedUpdateWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutPostsInput> =
  CategoryUncheckedUpdateWithoutPostsInputObjectSchemaBase;
