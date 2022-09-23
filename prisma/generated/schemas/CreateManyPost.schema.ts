import { z } from 'zod';
import './enums';
import { PostCreateManyInputObjectSchema } from './objects';

export const CreateManyPostSchema = z
  .object({
    data: z.lazy(() => PostCreateManyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
