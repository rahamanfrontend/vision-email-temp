
import express from "express";
import { statusUpdateController } from "./status-update-email.controller";



const router = express.Router(); 

router.post('/sent-email', statusUpdateController.sendEmail )

export const statusUpdateRouter = router; 