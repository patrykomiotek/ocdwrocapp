import { z } from 'zod';

// export const validationSchema = (t: string) => z.object({});

export const validationSchema = z.object({
  email: z.string({ message: 'Email is required' }).email({ message: 'Invalid e-mail' }),
  password: z.string({ message: 'Password is required' }).min(3),
  language: z.string(),
});

export type RegistrationDto = z.infer<typeof validationSchema>;
