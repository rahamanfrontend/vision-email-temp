import express, { Application, Request, Response } from 'express'
import cors from 'cors'; 
import catchAsync from './app/helpers/catchAsync';
import { allRoutes } from './app/routes/index';
import bodyParser from 'body-parser';
// Setting Up An App:
const app: Application = express(); 

//  Configure Middleware of Application Level 
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);


//   Root Get Route: 
app.get('/', catchAsync(async (req, res) => { 

  res.json({ 
     message: "Yah!!! Vision Email server is running."
   })
}))




//  Other Routes:
app.use('/api/', allRoutes)
//  Global Error Handler: 

// Not Found Route:




export default app; 