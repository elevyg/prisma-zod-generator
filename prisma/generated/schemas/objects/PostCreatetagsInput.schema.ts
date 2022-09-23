import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const PostCreatetagsInputObjectSchemaBase = z
  .object({
    set: z.string().array(),
  })
  .strict();
export const PostCreatetagsInputObjectSchema: z.ZodType<Prisma.PostCreatetagsInput> =
  PostCreatetagsInputObjectSchemaBase;
