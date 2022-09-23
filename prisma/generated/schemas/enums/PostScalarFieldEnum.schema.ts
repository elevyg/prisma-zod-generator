import { z } from 'zod';
export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'title',
  'content',
  'tags',
  'info',
  'published',
  'viewCount',
  'authorId',
  'categoryId',
  'likes',
  'status',
]);
