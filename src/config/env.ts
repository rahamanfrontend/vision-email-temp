// import dotenv from 'dotenv';
import dotenv from 'dotenv';

dotenv.config();

export const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    ZEPTO_TOKEN: process.env.ZEPTO_TOKEN,
    ZEPTO_URL: process.env.ZEPTO_URL,
    FRONTEND_HOST: process.env.FRONTEND_HOST,
};
