// import all the necessary modules
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

// import all the routes
import { allRoutes } from './routes';

/**
 * @description: This is the main entry point of the Application
 */
const app: Application = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Enable JSON

//  Default routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Yah!!! Vision Email server is running.',
    });
});

//  All Routes
app.use('/api/email', allRoutes);

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('App error -> ', err);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    });
});

// catch all the unknown routes
app.use('*', (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

export default app;
