import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SingleSelectObjectSchemaBase = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
});
export const SingleSelectObjectSchema: z.ZodType<Prisma.SingleSelect> =
  SingleSelectObjectSchemaBase;
