import dotenv from 'dotenv'
import connectDB from './db/database.js'

dotenv.config();


connectDB()
.then(()=>{

})
.catch((err) =>{
    console.log("MONGO DB CONNECTION FAILED",err);
})

