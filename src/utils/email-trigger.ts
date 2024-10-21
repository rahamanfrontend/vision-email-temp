import { env as configs } from '../config';

// @ts-ignore
import { SendMailClient } from 'zeptomail';

// const url = configs.ZEPTO_TOKEN;
// const token = env.ZEPTO_TOKEN

let client = new SendMailClient({
    url: configs?.ZEPTO_URL,
    token: configs.ZEPTO_TOKEN,
});

interface ISendZeptoEmail {
    subject: string;
    htmlbody: string;
    email_address: string;
    name: string;
    isInvoiceStatement?: boolean; // Optional since there's a default value
}

/** This is an asynchronous function `sendZeptoEmail` that sends an email using the `SendMailClient` from the `zeptomail` library.
 * It takes an object with email details as an argument, which conforms to the `ISendZeptoEmail` interface.
 * The function sets the sender's email address to a fixed value, but uses the `isInvoiceStatement` flag to determine the sender's name.
 * It then sends the email using the provided `subject`, `htmlbody`, `email_address`, and `name`.
 * If the email is sent successfully, it logs the response data to the console and returns it. If an error occurs, it logs the error and re-throws it. 
 * 
 * Utility function to send an email.
 * @param {string} subject - The subject of the email.
 * @param {string} htmlbody - The HTML body of the email.
 * @param {string} email_address - The recipient email address.
 * @param {string} name - The recipient name. */
const sendZeptoEmail = async ({
    subject,
    htmlbody,
    email_address,
    name,
    isInvoiceStatement = false,
}: ISendZeptoEmail) => {
    try {
        const data = await client.sendMail({
            from: {
                address: 'noreply@visionstransport.com.my',
                name: isInvoiceStatement
                    ? 'Vision Finance'
                    : 'Vision Transport',
            },
            to: [
                {
                    email_address: {
                        address: email_address,
                        name: name,
                    },
                },
            ],
            subject: subject,
            htmlbody: htmlbody,
        });

        console.dir(
            { data },
            {
                colors: 'red',
                depth: 'infinity',
            }
        );

        return data;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};

export default sendZeptoEmail;
