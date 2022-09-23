import { z } from 'zod';
import './enums';
import {
  CategoryWhereUniqueInputObjectSchema,
  CategoryCreateInputObjectSchema,
  CategoryUncheckedCreateInputObjectSchema,
  CategoryUpdateInputObjectSchema,
  CategoryUncheckedUpdateInputObjectSchema,
  CategorySelectObjectSchema,
} from './objects';

export const UpsertOneCategorySchema = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateInputObjectSchema),
    ]),
    update: z.union([
      z.lazy(() => CategoryUpdateInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateInputObjectSchema),
    ]),
    select: z.lazy(() => CategorySelectObjectSchema).optional(),
  })
  .strict();
