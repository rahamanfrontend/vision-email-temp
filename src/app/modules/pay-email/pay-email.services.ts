import { PayEmail } from './../../email-temp/pay-email';


import sendZeptoEmail from "../../helpers/sendZeptoEmail"
import { render } from "@react-email/components";

interface IPayEmailPayload {
  email: string;
  name: string;
  htmlTemp: string;
  subject: string 
}



const sendEmail = async (payload: IPayEmailPayload) => {

  const { email, name, htmlTemp, subject } = payload;

  console.log({payload})

  // getHTMLTemplate: 
  const emailTemplate = await render(PayEmail({ name, htmlTemp}), { 
    pretty: true
  })

  const result = await sendZeptoEmail({
    subject: subject, 
    email_address: email, 
    name, 
    htmlbody: emailTemplate, 
    isInvoiceStatement : false
  })

  // console.log({result})

  return result


}



export const payEmailServices  = {
   sendEmail
}

