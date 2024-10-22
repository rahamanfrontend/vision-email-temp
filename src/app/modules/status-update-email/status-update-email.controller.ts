import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";

import { statusUpdateServices  } from "./status-update-emial.services";


const sendEmail = catchAsync(async (req, res, next) => {
  
  const result = await statusUpdateServices.sendEmail(req.body)
  sendResponse(res, {
    statusCode: 200,
    message: 'Success',
    success: true,
    data: result
  })
})

export const statusUpdateController = {
  sendEmail
}