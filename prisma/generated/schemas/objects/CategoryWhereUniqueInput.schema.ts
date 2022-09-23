import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const CategoryWhereUniqueInputObjectSchemaBase = z
  .object({
    id: z.string().optional(),
  })
  .strict();
export const CategoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> =
  CategoryWhereUniqueInputObjectSchemaBase;
