import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostCreateManyCategoryInputObjectSchema } from './index';
export const PostCreateManyCategoryInputEnvelopeObjectSchemaBase = z
  .object({
    data: z.lazy(() => PostCreateManyCategoryInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
export const PostCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyCategoryInputEnvelope> =
  PostCreateManyCategoryInputEnvelopeObjectSchemaBase;
