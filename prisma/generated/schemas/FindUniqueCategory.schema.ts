import { z } from 'zod';
import './enums';
import {
  CategoryWhereUniqueInputObjectSchema,
  CategorySelectObjectSchema,
} from './objects';

export const FindUniqueCategorySchema = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    select: z.lazy(() => CategorySelectObjectSchema).optional(),
  })
  .strict();
