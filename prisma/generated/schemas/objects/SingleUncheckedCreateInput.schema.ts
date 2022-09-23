import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const SingleUncheckedCreateInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();
export const SingleUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SingleUncheckedCreateInput> =
  SingleUncheckedCreateInputObjectSchemaBase;
