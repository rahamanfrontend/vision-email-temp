import { StatusUpdateTemp } from './../../email-temp/driver-status-email-temp';


import sendZeptoEmail from "../../helpers/sendZeptoEmail"
import { render } from "@react-email/components";

interface IStatusUpdate {
  email: string;
  name: string;
  subject: string;
   status: string 
}



const sendEmail = async (payload: IStatusUpdate) => {

  const { email, name,  subject, status } = payload;

  console.log( 'status', { payload})

  // getHTMLTemplate: 
  const emailTemplate = await render(StatusUpdateTemp({ name, status}), { 
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



export const statusUpdateServices  = {
   sendEmail
}

