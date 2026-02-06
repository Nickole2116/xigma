import { z } from 'zod';

export const CreateProjectSchema = z.object({
  project_name: z
    .string()
    .min(1, 'Comment must be at least 1 character'),
});