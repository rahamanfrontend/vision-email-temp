import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";

import { invoiceServices } from "./invoicePDF.services";


const sendInvoiceEmail = catchAsync(async (req, res, next) => {
  const result = await invoiceServices.sendInvoiceEmail(req.body)
  sendResponse(res, {
    statusCode: 200,
    message: 'Success',
    success: true,
    data: result
  })
})

export const invoiceController = {
  sendInvoiceEmail
}