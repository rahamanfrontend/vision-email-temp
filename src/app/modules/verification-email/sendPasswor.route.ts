
import express from "express";
import { sendPasswordCtroller } from "./sendPassword.controller";


const router = express.Router(); 

router.post('/sent-email', sendPasswordCtroller.sendPassword )

export const sendPasswordRouter = router; 