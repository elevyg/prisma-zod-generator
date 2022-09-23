import { z } from 'zod';
import './enums';
import {
  CategoryUpdateManyMutationInputObjectSchema,
  CategoryUncheckedUpdateManyInputObjectSchema,
  CategoryWhereInputObjectSchema,
} from './objects';

export const UpdateManyCategorySchema = z
  .object({
    data: z.union([
      z.lazy(() => CategoryUpdateManyMutationInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateManyInputObjectSchema),
    ]),
    where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  })
  .strict();
