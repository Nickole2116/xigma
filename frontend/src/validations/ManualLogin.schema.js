import { z } from 'zod';

export const ManualLoginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters'),
  access_key: z
    .string()
    .min(20, 'Username must be at least 20 characters'),
});