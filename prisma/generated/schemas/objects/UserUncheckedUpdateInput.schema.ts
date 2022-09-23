import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema,
} from './index';
export const UserUncheckedUpdateInputObjectSchemaBase = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    posts: z
      .lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  UserUncheckedUpdateInputObjectSchemaBase;
