import { z } from 'zod';
import { CategoryScalarFieldEnumSchema } from './enums';
import {
  CategoryWhereInputObjectSchema,
  CategoryOrderByWithRelationInputObjectSchema,
  CategoryWhereUniqueInputObjectSchema,
  CategorySelectObjectSchema,
} from './objects';

export const FindFirstCategorySchema = z
  .object({
    where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
    orderBy: z
      .union([
        z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).array(),
        z.lazy(() => CategoryOrderByWithRelationInputObjectSchema),
      ])
      .optional(),
    cursor: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: CategoryScalarFieldEnumSchema.array().optional(),
    select: z.lazy(() => CategorySelectObjectSchema).optional(),
  })
  .strict();
