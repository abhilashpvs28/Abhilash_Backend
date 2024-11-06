
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';



dotenv.config({
  path: './env',  // Ensure that the path to .env is correct
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection Failed !!!", err);
    process.exit(1);  // Exit the process if DB connection fails
  });

// General uncaught error handler
process.on('uncaughtException', (error) => {
  console.error('Unhandled Exception:', error);
  process.exit(1);  // Exit process on unexpected errors
});




/*
const app = express()

(  async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error",(error)=>{
        console.log("ERRR:",error)
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is Listening on PORT ${process.env.PORT}`);       
      })
    }
    catch(error){
        console.error(error)
        throw err
    }
})()

*/