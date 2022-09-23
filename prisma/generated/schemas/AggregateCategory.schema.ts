import { z } from 'zod';
import './enums';
import {
  CategoryWhereInputObjectSchema,
  CategoryOrderByWithRelationInputObjectSchema,
  CategoryWhereUniqueInputObjectSchema,
} from './objects';

export const AggregateCategorySchema = z
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
  })
  .strict();
