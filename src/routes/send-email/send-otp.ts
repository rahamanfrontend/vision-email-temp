import { Router, Request, Response } from 'express';

// import render from '@react-email/render';
import { render } from '@react-email/components';

// validation middleware
import validate from '../../validation';

// import utils imports for sending emails
import sendZeptoEmail from '../../utils/email-trigger';

// import schema & types imports for validation
import { OTPTemplate } from '../../template/otp-verification';
import { sendOtpSchema, sendOtpSchemaType } from '../../validation/schema';

// router
const router = Router();

/**
 * @route POST /api/email/send-otp
 * @description Sends an OTP email to the specified email address using a custom email template.
 * 
 * @param {sendOtpSchemaType} req.body - The request body containing the email details.
 * @param {string} req.body.email - The recipient's email address.
 * @param {string} req.body.name - The recipient's name.
 * @param {string} req.body.token - The unique token for verification.
 * @param {string} req.body.otp - The OTP code to be sent to the recipient.
 * @param {string} req.body.subject - The subject of the email.
 * 
 * @returns {Object} 200 - Success response containing a success message.
 * @returns {Object} 500 - Error response if something goes wrong.
 * 
 * @example
 * // Example request body
 * {
 *   "email": "example@domain.com",
 *   "name": "John Doe",
 *   "token": "123abc",
 *   "otp": "123456",
 *   "subject": "Your OTP Code"
 * }
 * 
 * @example
 * // Example success response
 * {
 *   "success": true,
 *   "message": "Email OTP sent successfully"
 * }
 * 
 * @example
 * // Example error response
 * {
 *   "success": false,
 *   "message": "Internal server error!"
 * }
 */

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
