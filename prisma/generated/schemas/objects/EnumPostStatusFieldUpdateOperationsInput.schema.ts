import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostStatusSchema } from '../enums';
import './index';
export const EnumPostStatusFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: PostStatusSchema.optional(),
  })
  .strict();
export const EnumPostStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPostStatusFieldUpdateOperationsInput> =
  EnumPostStatusFieldUpdateOperationsInputObjectSchemaBase;
