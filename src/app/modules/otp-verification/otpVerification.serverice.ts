import { Email } from "../../email-temp/otp-verification"
import sendZeptoEmail from "../../helpers/sendZeptoEmail"
import { render } from "@react-email/components";

interface IOtpPayload {
  email: string;
  name: string;
  token: string;
  otp: string;
}

const verifyOtpEmail = async (payload: IOtpPayload) => {

  const { email, name, token, otp } = payload;

  // getHTMLTemplate: 
  const emailTemplate = await render(Email({ name, token, otp }))

  // const result = await sendZeptoEmail()

  console.log(emailTemplate)

  return {
    success: true
  }


}



export const optVerificationServices = {
  verifyOtpEmail
}
