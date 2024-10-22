
import express from "express";
import { invoiceController } from "./invoicePDF.controller";



const router = express.Router(); 

router.post('/sent-email',invoiceController.sendInvoiceEmail )

export const invoiceRoute = router;  