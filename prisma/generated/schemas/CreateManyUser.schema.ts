import { z } from 'zod';
import './enums';
import { UserCreateManyInputObjectSchema } from './objects';

export const CreateManyUserSchema = z
  .object({
    data: z.lazy(() => UserCreateManyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
