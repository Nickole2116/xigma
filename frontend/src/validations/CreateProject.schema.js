import { z } from 'zod';

export const CreateProjectSchema = z.object({
  project_name: z
    .string()
    .min(1, 'Project name is required'),

  attachment: z
    .any()
    .optional()
    .refine(
      (files) =>
        !files || files.length === 0 || files[0].size <= 5_000_000,
      'Max file size is 5MB'
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ['image/jpeg', 'image/png', 'image/webp'].includes(files[0].type),
      'Only JPG, PNG, WEBP allowed'
    ),
});
