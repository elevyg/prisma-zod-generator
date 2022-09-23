import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const SingleCreateManyInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();
export const SingleCreateManyInputObjectSchema: z.ZodType<Prisma.SingleCreateManyInput> =
  SingleCreateManyInputObjectSchemaBase;
