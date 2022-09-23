import { z } from 'zod';
import './enums';
import { CategoryWhereInputObjectSchema } from './objects';

export const DeleteManyCategorySchema = z
  .object({
    where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  })
  .strict();
