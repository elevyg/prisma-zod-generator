import { z } from 'zod';
import './enums';
import {
  SingleCreateInputObjectSchema,
  SingleUncheckedCreateInputObjectSchema,
  SingleSelectObjectSchema,
} from './objects';

export const CreateOneSingleSchema = z
  .object({
    data: z.union([
      z.lazy(() => SingleCreateInputObjectSchema),
      z.lazy(() => SingleUncheckedCreateInputObjectSchema),
    ]),
    select: z.lazy(() => SingleSelectObjectSchema).optional(),
  })
  .strict();
