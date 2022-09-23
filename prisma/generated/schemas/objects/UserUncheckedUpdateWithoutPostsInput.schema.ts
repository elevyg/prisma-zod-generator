import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
} from './index';
export const UserUncheckedUpdateWithoutPostsInputObjectSchemaBase = z
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
  })
  .strict();
export const UserUncheckedUpdateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsInput> =
  UserUncheckedUpdateWithoutPostsInputObjectSchemaBase;
