import { z } from 'zod';

export const manualLoginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters'),
});