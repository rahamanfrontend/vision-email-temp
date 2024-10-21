import { Router, Request, Response } from 'express';

// TODO: need to specify import comment
import { render } from '@react-email/components';

import { OTPTemplate } from '../../template/otp-verification';
import sendZeptoEmail from '../../utils/email-trigger';

import { sendOtpSchema, sendOtpSchemaType } from '../../validation/schema';
import validate from '../../validation';

const router = Router();

router.post(
    '/',
    validate(sendOtpSchema, 'body'),
    async (req: Request, res: Response) => {
        try {
            const body: sendOtpSchemaType = req.body;
            const { email, name, token, otp, subject } = body;

            // generate HTML template
            const emailTemplate = await render(
                OTPTemplate({ name, token, otp })
            );

            // triggering email
            await sendZeptoEmail({
                subject,
                email_address: email,
                name,
                htmlbody: emailTemplate,
                isInvoiceStatement: false,
            });
            res.status(200).json({
                success: true,
                message: 'Email OTP sent successfully',
            });
        } catch (error: unknown) {
            console.error('Error while sending email OTP ', error);
            res.status(500).json({
                success: false,
                message: 'Internal server error!',
            });
        }
    }
);

export const sendOTPRoutes = router;
