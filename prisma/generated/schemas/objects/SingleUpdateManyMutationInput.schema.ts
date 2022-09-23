import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { StringFieldUpdateOperationsInputObjectSchema } from './index';
export const SingleUpdateManyMutationInputObjectSchemaBase = z
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
export const SingleUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SingleUpdateManyMutationInput> =
  SingleUpdateManyMutationInputObjectSchemaBase;
