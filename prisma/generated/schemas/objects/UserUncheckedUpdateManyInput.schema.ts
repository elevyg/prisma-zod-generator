import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
} from './index';
export const UserUncheckedUpdateManyInputObjectSchemaBase = z
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
export const UserUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  UserUncheckedUpdateManyInputObjectSchemaBase;
