# SETUP PROFESSIONAL BACKEND PROJECT

- npm init
- create folder 'public' => 'temp' => .gitkeep , 
beacuse git don't keep record of empty folders so by including 'public' it will track it.

- npm i dotenv => create file  '.env'
- create file '.gitignore'  , use git ignore generator (use Node)
- to push .env on git, it is not recommended => so use .env.sample to push it on git.

- in root => create folder 'src'
- shortcut => mkdir folderName 

- in src => mkdir controllers db middlewares models routes utils
- npm i -D prettier => create file '.prettierrc' => create file '.prettierignore'

- add sensetivve info like PORT, MONGODB_URI in '.env' file
- add constants in  'constants.js' file

- in db=> database.js

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


- in index.js

import dotenv from 'dotenv'
import connectDB from './db/database.js'

dotenv.config();

connectDB()


