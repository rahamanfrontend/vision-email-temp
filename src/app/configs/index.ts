
import dotenv from 'dotenv'

import path from 'path'; 
dotenv.config({ path: path.join(process.cwd(), '.env') })


export default { 
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  SG_API_KEY: process.env.SG_API_KEY,
  ZEPTO_TOKEN: process.env.ZEPTO_TOKEN, 
  ZEPTO_URL: process.env.ZEPTO_URL, 
  frontendHost: process.env.FRONT_END_HOST
}