// 1ST APPROACH - CONNECT DB IN index.js , but it pollutes the index.js file


// import express from 'express';
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';

// const app = express();

// ;(async ()=>{
//     try{   
//         await mongoose.connect(`${process.env.MONGODB_URI}`,{
//             dbName: DB_NAME
//         })

//         app.on('error',(error)=>{
//             console.log("ERROR: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT || 3000,()=>{
//             console.log("Server is running on port: " + process.env.PORT);
//         })
//     }
//     catch(err){
//         console.log("ERROR: ",err);
//         throw err;
//     }

// }
// )()

// ===============================================================================================================


// 2ND APPROACH - CONNECT DB IN db=> database.js and connect it in index.js

/* 

-*   DB IS ALWAYS IN ANOTHER CONTINENT SO USE ASYNC,AWAIT
-*   THERE CAN BE ERRORS SO ALWAYS WRAP IN TRY-CATCH BLOCK

*/

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}


export default connectDB;