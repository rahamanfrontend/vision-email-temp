import {Server}  from 'http'
import app from './app';
import configs from './app/configs';


let server: Server;

const main = async () => { 

   try {
     server = app.listen(configs.port, () => { 
         console.log(`Server is running on port ${configs?.port}`)
      })
   } catch (err) {
     console.log(err)
   }
   
}

main(); 


//  When UnhandleRejection: 
process.on('unhandledRejection', (reason, promise) => { 

   console.log({ reason, promise})
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  } else { 
   process.exit(1)
  }
})

//  UnCought Exception:

process.on("uncaughtException", (err) => {
    console.log(err)
    process.exit(1) 
})