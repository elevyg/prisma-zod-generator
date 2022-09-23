import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const PostUpdatetagsInputObjectSchemaBase = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict();
export const PostUpdatetagsInputObjectSchema: z.ZodType<Prisma.PostUpdatetagsInput> =
  PostUpdatetagsInputObjectSchemaBase;
