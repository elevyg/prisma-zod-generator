import { z } from 'zod';
import { CategoryScalarFieldEnumSchema } from './enums';
import {
  CategoryWhereInputObjectSchema,
  CategoryOrderByWithAggregationInputObjectSchema,
  CategoryScalarWhereWithAggregatesInputObjectSchema,
} from './objects';

export const GroupByCategorySchema = z
  .object({
    where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
    orderBy: z.union([
      z.lazy(() => CategoryOrderByWithAggregationInputObjectSchema).array(),
      z.lazy(() => CategoryOrderByWithAggregationInputObjectSchema),
    ]),
    by: CategoryScalarFieldEnumSchema.array(),
    having: z
      .lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema)
      .optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
