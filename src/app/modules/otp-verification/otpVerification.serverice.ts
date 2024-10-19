import { Email } from "../../email-temp/otp-verification"
import sendZeptoEmail from "../../helpers/sendZeptoEmail"
import { render } from "@react-email/components";

interface IOtpPayload {
  email: string;
  name: string;
  token: string;
  otp: string;
  subject: string 
}

const verifyOtpEmail = async (payload: IOtpPayload) => {

  const { email, name, token, otp, subject} = payload;

  // getHTMLTemplate: 
  const emailTemplate = await render(Email({ name, token, otp }), {
    pretty: true, 
    
  })

  console.log(emailTemplate)
  const result = await sendZeptoEmail({
    subject, 
    email_address: email, 
    name, 
    htmlbody: emailTemplate, 
    isInvoiceStatement : false
  }
    
  )


  return result


}



export const optVerificationServices = {
  verifyOtpEmail
}
