import { z } from 'zod';
import './enums';
import {
  SingleUpdateManyMutationInputObjectSchema,
  SingleUncheckedUpdateManyInputObjectSchema,
  SingleWhereInputObjectSchema,
} from './objects';

export const UpdateManySingleSchema = z
  .object({
    data: z.union([
      z.lazy(() => SingleUpdateManyMutationInputObjectSchema),
      z.lazy(() => SingleUncheckedUpdateManyInputObjectSchema),
    ]),
    where: z.lazy(() => SingleWhereInputObjectSchema).optional(),
  })
  .strict();
