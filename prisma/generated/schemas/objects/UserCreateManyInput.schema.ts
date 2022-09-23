import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const UserCreateManyInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
  })
  .strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> =
  UserCreateManyInputObjectSchemaBase;
