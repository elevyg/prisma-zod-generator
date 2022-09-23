import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const SingleWhereUniqueInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
  })
  .strict();
export const SingleWhereUniqueInputObjectSchema: z.ZodType<Prisma.SingleWhereUniqueInput> =
  SingleWhereUniqueInputObjectSchemaBase;
