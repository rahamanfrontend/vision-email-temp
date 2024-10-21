// importing zod schema
import { z } from 'zod';

// email, name, password, reset_link, subject need this keys
export const sendPasswordSchema = z.object({
    email: z
        .string({ message: 'Email should be string' })
        .email({ message: 'Email should be valid' }),
    name: z
        .string({ message: 'Name should be string value' })
        .min(1, 'Name is required')
        .max(50, 'Max length should be 50 characters'),
    password: z
        .string()
        .min(1, 'Password is required')
        .max(300, 'Max length should be 300 characters'),
    reset_link: z
        .string()
        .min(1, 'Reset link is required')
        .max(300, 'Max length should be 300 characters'),
    subject: z
        .string()
        .min(1, 'Subject is required')
        .max(100, 'Max length should be 100 characters'),
});

// exporting type
export type ISendPasswordPayload = z.infer<typeof sendPasswordSchema>;
