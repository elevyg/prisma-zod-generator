import { z } from 'zod';
export const PostStatusSchema = z.enum(['DRAFT', 'PUBLISHED', 'TRASH']);
