import { z } from 'zod';
import './enums';
import {
  SingleWhereUniqueInputObjectSchema,
  SingleSelectObjectSchema,
} from './objects';

export const FindUniqueSingleSchema = z
  .object({
    where: z.lazy(() => SingleWhereUniqueInputObjectSchema),
    select: z.lazy(() => SingleSelectObjectSchema).optional(),
  })
  .strict();
