import { Router, Request, Response } from 'express';

// import render from '@react-email/render';
import { render } from '@react-email/components';

// validation middleware
import validate from '../../validation';

// utils imports for sending emails
import sendZeptoEmail from '../../utils/email-trigger';

// schema & types imports for validation
import {
    sendPasswordSchema,
    ISendPasswordPayload,
} from '../../validation/schema';

// template imports
import { PasswordTemplate } from './../../template/send-password';

// router
const router = Router();


/**
 * @route POST /api/email/send-password
 * @description Sends a password email to the specified email address using a custom email template.
 * 
 * @param {ISendPasswordPayload} req.body - The request body containing the email details.
 * @param {string} req.body.email - The recipient's email address.
 * @param {string} req.body.name - The recipient's name.
 * @param {string} req.body.password - The password to be sent to the recipient.
 * @param {string} req.body.reset_link - The password reset link.
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
 *   "password": "mySecurePassword",
 *   "reset_link": "https://example.com/reset-password",
 *   "subject": "Your Password Details"
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