import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { StringFieldUpdateOperationsInputObjectSchema } from './index';
export const CategoryUncheckedUpdateManyInputObjectSchemaBase = z
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
export const CategoryUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> =
  CategoryUncheckedUpdateManyInputObjectSchemaBase;
