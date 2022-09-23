import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostStatusSchema } from '../enums';
import { NestedEnumPostStatusFilterObjectSchema } from './index';
export const EnumPostStatusFilterObjectSchemaBase = z
  .object({
    equals: PostStatusSchema.optional(),
    in: PostStatusSchema.array().optional(),
    notIn: PostStatusSchema.array().optional(),
    not: z
      .union([
        PostStatusSchema,
        z.lazy(() => NestedEnumPostStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const EnumPostStatusFilterObjectSchema: z.ZodType<Prisma.EnumPostStatusFilter> =
  EnumPostStatusFilterObjectSchemaBase;
