import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './index';
export const UserCreateInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    posts: z
      .lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> =
  UserCreateInputObjectSchemaBase;
