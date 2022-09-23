import { z } from 'zod';
import './enums';
import {
  CategoryUpdateInputObjectSchema,
  CategoryUncheckedUpdateInputObjectSchema,
  CategoryWhereUniqueInputObjectSchema,
  CategorySelectObjectSchema,
} from './objects';

export const UpdateOneCategorySchema = z
  .object({
    data: z.union([
      z.lazy(() => CategoryUpdateInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateInputObjectSchema),
    ]),
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    select: z.lazy(() => CategorySelectObjectSchema).optional(),
  })
  .strict();
