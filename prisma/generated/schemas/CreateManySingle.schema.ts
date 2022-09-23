import { z } from 'zod';
import './enums';
import { SingleCreateManyInputObjectSchema } from './objects';

export const CreateManySingleSchema = z
  .object({
    data: z.lazy(() => SingleCreateManyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
