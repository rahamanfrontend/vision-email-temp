import { emailRouter } from "../modules/otp-verification/optVerification.route";

import express from 'express'; 
import { sendPasswordRouter } from "../modules/verification-email/sendPasswor.route";
import { invoiceRoute } from "../modules/invoice-pdf/invoicePDF.route";
import { payEmailRouter } from "../modules/pay-email/pay-email.route";
import { statusUpdateRouter } from "../modules/status-update-email/status-update-email.route";
const router = express.Router()

const routes = [
  {
    route: emailRouter, 
    path: '/otp'
  },
  {
    route:sendPasswordRouter , 
    path: '/password'
  }, 
  { 
    route: invoiceRoute, 
    path: '/invoice'
  },
  { 
    route: payEmailRouter, 
    path: '/pay'
  },
  { 
    route: statusUpdateRouter, 
    path: '/status-update'
  }
]


routes.forEach((route) => router.use(route.path, route.route))

export const allRoutes = router; 