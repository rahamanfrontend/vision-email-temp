import catchAsync from "../helpers/catchAsync";
import sendResponse from "../helpers/sendResponse";

import httpStatus from "http-status";

const notFoundRoute = catchAsync(async (req, res) => {

  const path = req.path

  sendResponse(res, {
    statusCode: httpStatus.NOT_FOUND,
    success: false, 
    message: "Route Not Found!!!", 
    data: { 
      route: path
    }
  })

})


export default notFoundRoute; 