import { emailRouter } from "../modules/otp-verification/optVerification.route";

import express from 'express'; 
import { sendPasswordRouter } from "../modules/verification-email/sendPasswor.route";
const router = express.Router()

const routes = [
  {
    route: emailRouter, 
    path: '/otp'
  },
  {
    route:sendPasswordRouter , 
    path: '/password'
  }
]


routes.forEach((route) => router.use(route.path, route.route))

export const allRoutes = router; 