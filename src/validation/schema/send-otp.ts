import { z } from 'zod';

export const sendOtpSchema = z.object({
    email: z
        .string({ message: 'Enter a valid email address' })
        .email({ message: 'Invalid email format' }),
    name: z
        .string({ message: 'Name is required' })
        .min(1, 'Name cannot be empty')
        .max(50, 'Name can be up to 50 characters'),
    token: z
        .string()
        .min(1, 'Token is required')
        .max(300, 'Token can be up to 300 characters'),
    otp: z
        .string()
        .min(4, 'OTP must be 4 characters')
        .max(6, 'OTP must be 6 characters'),
    subject: z
        .string()
        .min(1, 'Subject is required')
        .max(100, 'Subject can be up to 100 characters'),
});

// exporting type
export type sendOtpSchemaType = z.infer<typeof sendOtpSchema>;
