import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostCreateManyAuthorInputObjectSchema } from './index';
export const PostCreateManyAuthorInputEnvelopeObjectSchemaBase = z
  .object({
    data: z.lazy(() => PostCreateManyAuthorInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
export const PostCreateManyAuthorInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyAuthorInputEnvelope> =
  PostCreateManyAuthorInputEnvelopeObjectSchemaBase;
