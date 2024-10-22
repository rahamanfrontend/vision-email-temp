import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";

import { payEmailServices  } from "./pay-email.services";


const sendEmail = catchAsync(async (req, res, next) => {
  console.log(`payAttention`)
  const result = await payEmailServices.sendEmail(req.body)
  sendResponse(res, {
    statusCode: 200,
    message: 'Success',
    success: true,
    data: result
  })
})

export const payEmailCtroller = {
  sendEmail
}