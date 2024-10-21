/* this file will export all the routes files */

// import Router from "express";
import { Router } from "express";

// import all the routes
import {sendOTPRoutes} from "./send-email/send-otp";
import sendPasswordRoutes from "./send-email/send-password";

const router = Router();

router.use('/send-otp', sendOTPRoutes);
router.use('/send-password', sendPasswordRoutes);

export const allRoutes = router;