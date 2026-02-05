import { z } from 'zod';

export const CreateOrderSchema = z.object({
  comments: z
    .string()
    .min(1, 'Comment must be at least 1 character'),
});