import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";

import { sendPasswordServices } from "./sendPassword.services";


const sendPassword = catchAsync(async (req, res, next) => {
  const result = await sendPasswordServices.sendPassword(req.body)
  sendResponse(res, {
    statusCode: 200,
    message: 'Success',
    success: true,
    data: result
  })
})

export const sendPasswordCtroller = {
  sendPassword
}