import { z } from 'zod';
import './enums';
import { SingleWhereInputObjectSchema } from './objects';

export const DeleteManySingleSchema = z
  .object({
    where: z.lazy(() => SingleWhereInputObjectSchema).optional(),
  })
  .strict();
