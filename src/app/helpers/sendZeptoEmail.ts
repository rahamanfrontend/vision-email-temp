


import { SendMailClient } from "zeptomail";
import "../config/index.js"
import configs from "../configs/index.js";

// const url = configs.ZEPTO_TOKEN;
// const token = env.ZEPTO_TOKEN

let client = new SendMailClient({ url: configs?.ZEPTO_URL, token: configs.ZEPTO_TOKEN });

/**
 * Utility function to send an email.
 *
 * @param {string} subject - The subject of the email.
 * @param {string} htmlbody - The HTML body of the email.
 * @param {string} email_address - The recipient email address.
 * @param {string} name - The recipient name.
 */

interface ISendZeptoEmail {
  subject: string;
  htmlbody: string;
  email_address: string;
  name: string;
  isInvoiceStatement?: boolean; // Optional since there's a default value
}

const sendZeptoEmail  = async (
  {subject,
  htmlbody,
  email_address,
  name,
  isInvoiceStatement=false}: ISendZeptoEmail
)  =>  {
  try {
    await client.sendMail({
      from: {
        address: "noreply@visionstransport.com.my",
        name: isInvoiceStatement?"Vision Finance":"Vision Transport",
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
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Failed to send email:", error?.error?.details);
    throw error;
  }
}



export default sendZeptoEmail