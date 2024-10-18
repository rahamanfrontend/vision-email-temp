import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";
import { optVerificationServices } from "./otpVerification.serverice";





const otpVerificadtion = catchAsync(async (req, res, next) => {
  const result = await optVerificationServices.verifyOtpEmail(req.body)
  sendResponse(res, {
    statusCode: 200,
    message: 'Success',
    success: true,
    data: result
  })




})

export const OtpController = {
  otpVerificadtion
}