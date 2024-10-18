
import express from "express";
import { OtpController } from "./otpVerification.controller";



const router = express.Router(); 


router.post('/sent-email', OtpController.otpVerificadtion )

export const emailRouter = router; 