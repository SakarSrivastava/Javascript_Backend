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
.then(()=>{
    
})
.catch((err) =>{
    console.log("MONGO DB CONNECTION FAILED",err);
})




- npm i cors cookie-parser.

- setup middlewares in app.js file.

- make wrapper for the DB connection to be used in controllers in asyncHandler.js

- make util of ApiError to send errors

- make models - userSchema, videoSchema etc.

- npm install mongoose-aggregate-paginate-v2 , use it in models for aggregation and pagination. (ex- videoSchema)

    videoSchema.plugin(mongooseAggregatePaginate);


- npm i bcrypt jsonwebtoken 

- in user schema, schema.pre

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        next();
    }
    next();
});


- methods to compare password, genrate acces token and refresh token


userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
)
}


userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
)
}





