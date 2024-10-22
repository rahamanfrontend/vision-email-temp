import { InvoiceEmail } from './../../email-temp/invoiceEmail';


import sendZeptoEmail from "../../helpers/sendZeptoEmail"
import { render } from "@react-email/components";

interface ISendPasswordPayload {
  email: string;
  name: string;
  pdfLink: string;
  subject: string; 
  htmlTemp: string;
  
}




const sendInvoiceEmail = async (payload: ISendPasswordPayload) => {

  // subject,
  // to_email,
  // emailHtmlTemplate,
  // attn_name,
  // pdf_link,

  const { email, name, pdfLink, subject, htmlTemp,  } = payload;

  console.log({payload})

  // getHTMLTemplate: 
  const emailTemplate = await render(InvoiceEmail({ name, pdfLink,  htmlTemp}), { 
    pretty: true
  })

  const result = await sendZeptoEmail({
    subject: subject, 
    email_address: email, 
    name, 
    htmlbody: emailTemplate, 
    isInvoiceStatement : true
  })

  console.log( {res: result})

  return result


}

export const invoiceServices = {
  sendInvoiceEmail
}

