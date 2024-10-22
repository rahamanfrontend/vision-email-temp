
import express from "express";
import { payEmailCtroller } from "./pay-email.controller";


const router = express.Router(); 

router.post('/sent-email', payEmailCtroller.sendEmail )

export const payEmailRouter = router; 