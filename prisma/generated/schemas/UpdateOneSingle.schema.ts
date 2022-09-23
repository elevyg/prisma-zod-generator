import { z } from 'zod';
import './enums';
import {
  SingleUpdateInputObjectSchema,
  SingleUncheckedUpdateInputObjectSchema,
  SingleWhereUniqueInputObjectSchema,
  SingleSelectObjectSchema,
} from './objects';

export const UpdateOneSingleSchema = z
  .object({
    data: z.union([
      z.lazy(() => SingleUpdateInputObjectSchema),
      z.lazy(() => SingleUncheckedUpdateInputObjectSchema),
    ]),
    where: z.lazy(() => SingleWhereUniqueInputObjectSchema),
    select: z.lazy(() => SingleSelectObjectSchema).optional(),
  })
  .strict();
