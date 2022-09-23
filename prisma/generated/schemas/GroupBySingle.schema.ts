import { z } from 'zod';
import { SingleScalarFieldEnumSchema } from './enums';
import {
  SingleWhereInputObjectSchema,
  SingleOrderByWithAggregationInputObjectSchema,
  SingleScalarWhereWithAggregatesInputObjectSchema,
} from './objects';

export const GroupBySingleSchema = z
  .object({
    where: z.lazy(() => SingleWhereInputObjectSchema).optional(),
    orderBy: z.union([
      z.lazy(() => SingleOrderByWithAggregationInputObjectSchema).array(),
      z.lazy(() => SingleOrderByWithAggregationInputObjectSchema),
    ]),
    by: SingleScalarFieldEnumSchema.array(),
    having: z
      .lazy(() => SingleScalarWhereWithAggregatesInputObjectSchema)
      .optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
