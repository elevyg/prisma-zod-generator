import { z } from 'zod';
import './enums';
import {
  SingleWhereUniqueInputObjectSchema,
  SingleCreateInputObjectSchema,
  SingleUncheckedCreateInputObjectSchema,
  SingleUpdateInputObjectSchema,
  SingleUncheckedUpdateInputObjectSchema,
  SingleSelectObjectSchema,
} from './objects';

export const UpsertOneSingleSchema = z
  .object({
    where: z.lazy(() => SingleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SingleCreateInputObjectSchema),
      z.lazy(() => SingleUncheckedCreateInputObjectSchema),
    ]),
    update: z.union([
      z.lazy(() => SingleUpdateInputObjectSchema),
      z.lazy(() => SingleUncheckedUpdateInputObjectSchema),
    ]),
    select: z.lazy(() => SingleSelectObjectSchema).optional(),
  })
  .strict();
