import { Router, Request, Response } from 'express';
import { render } from '@react-email/components';
// validation middleware
import validate from '../../validation';
import sendZeptoEmail from '../../utils/email-trigger';

import {
    sendPasswordSchema,
    ISendPasswordPayload,
} from '../../validation/schema';
import { PasswordTemplate } from './../../template/send-password';

const router = Router();

router.post(
    '/',
    validate(sendPasswordSchema, 'body'),
    async (req: Request, res: Response) => {
        try {
            const payload: ISendPasswordPayload = req.body;
            const { email, name, password, reset_link, subject } = payload;

            // generate HTML template
            const emailTemplate = await render(
                PasswordTemplate({ name, password, reset_link })
            );

            const result = await sendZeptoEmail({
                subject: subject,
                email_address: email,
                name,
                htmlbody: emailTemplate,
                isInvoiceStatement: false,
            });
            console.log("Success result ", result);
            res.status(200).json({
                success: true,
                message: 'Email OTP sent successfully',
            });
        } catch (error: any) {
            console.error('Error while sending password ', error);
            res.status(500).json({
                success: false,
                message: 'Internal server error!',
            });
        }
    }
);

export default router;