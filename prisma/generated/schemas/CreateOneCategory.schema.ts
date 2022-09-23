import { z } from 'zod';
import './enums';
import {
  CategoryCreateInputObjectSchema,
  CategoryUncheckedCreateInputObjectSchema,
  CategorySelectObjectSchema,
} from './objects';

export const CreateOneCategorySchema = z
  .object({
    data: z.union([
      z.lazy(() => CategoryCreateInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateInputObjectSchema),
    ]),
    select: z.lazy(() => CategorySelectObjectSchema).optional(),
  })
  .strict();
