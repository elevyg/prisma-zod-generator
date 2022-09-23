import { z } from 'zod';
import './enums';
import { CategoryCreateManyInputObjectSchema } from './objects';

export const CreateManyCategorySchema = z
  .object({
    data: z.lazy(() => CategoryCreateManyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
