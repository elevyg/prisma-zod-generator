import { z } from 'zod';
import { SingleScalarFieldEnumSchema } from './enums';
import {
  SingleWhereInputObjectSchema,
  SingleOrderByWithRelationInputObjectSchema,
  SingleWhereUniqueInputObjectSchema,
  SingleSelectObjectSchema,
} from './objects';

export const FindManySingleSchema = z
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
    distinct: SingleScalarFieldEnumSchema.array().optional(),
    select: z.lazy(() => SingleSelectObjectSchema).optional(),
  })
  .strict();
