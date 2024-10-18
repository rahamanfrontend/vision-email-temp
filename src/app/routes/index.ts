import { emailRouter } from "../modules/otp-verification/optVerification.route";

import express from 'express'; 
const router = express.Router()

const routes = [
  {
    route: emailRouter, 
    path: '/otp'
  }
]


routes.forEach((route) => router.use(route.path, route.route))

export const allRoutes = router; 