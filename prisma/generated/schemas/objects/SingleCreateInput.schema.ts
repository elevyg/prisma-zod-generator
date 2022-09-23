import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const SingleCreateInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();
export const SingleCreateInputObjectSchema: z.ZodType<Prisma.SingleCreateInput> =
  SingleCreateInputObjectSchemaBase;
