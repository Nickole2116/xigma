import { z } from 'zod';

export const ManualLoginSchema = z.object({
  username: z
    .string()
    .min(3, 'User Code must be at least 3 characters'),
  access_key: z
    .string()
    .min(20, 'Access Key must be at least 20 characters'),
});