import { env } from "./config"

// import app instance from app.ts file
import app from './app';

// set port
const PORT = env.PORT;

// start app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
