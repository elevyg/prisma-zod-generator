import { z } from 'zod';
import './enums';
import {
  SingleWhereInputObjectSchema,
  SingleOrderByWithRelationInputObjectSchema,
  SingleWhereUniqueInputObjectSchema,
} from './objects';

export const AggregateSingleSchema = z
  .object({
    where: z.lazy(() => SingleWhereInputObjectSchema).optional(),
    orderBy: z
      .union([
        z.lazy(() => SingleOrderByWithRelationInputObjectSchema).array(),
        z.lazy(() => SingleOrderByWithRelationInputObjectSchema),
      ])
      .optional(),
    cursor: z.lazy(() => SingleWhereUniqueInputObjectSchema).optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
