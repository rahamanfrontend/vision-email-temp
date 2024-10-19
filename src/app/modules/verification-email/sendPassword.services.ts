import { SendPasswordTemp } from './../../email-temp/send-password';

import sendZeptoEmail from "../../helpers/sendZeptoEmail"
import { render } from "@react-email/components";

interface ISendPasswordPayload {
  email: string;
  name: string;
  password: string; 
  resetLink: string;
  subject: string 
}



const sendPassword = async (payload: ISendPasswordPayload) => {

  const { email, name, password, resetLink, subject } = payload;

  // getHTMLTemplate: 
  const emailTemplate = await render(SendPasswordTemp({ name, password , resetLink}), { 
    pretty: true
  })

  const result = await sendZeptoEmail({
    subject: subject, 
    email_address: email, 
    name, 
    htmlbody: emailTemplate, 
    isInvoiceStatement : false
  })

  console.log({result})

  return result


}



export const sendPasswordServices = {
  sendPassword
}

