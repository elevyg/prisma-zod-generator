import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const BigIntFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.bigint().optional(),
    increment: z.bigint().optional(),
    decrement: z.bigint().optional(),
    multiply: z.bigint().optional(),
    divide: z.bigint().optional(),
  })
  .strict();
export const BigIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> =
  BigIntFieldUpdateOperationsInputObjectSchemaBase;
