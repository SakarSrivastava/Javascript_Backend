import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

// middleware for cors
app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true
}))

// middleware for getting json responses
app.use(express.json({
    limit: "16kb"
}))

// middleware for changing url, like in url => search+term or search%20term  
app.use(express.urlencoded({
    limit: "16kb",
    extended: true
}))

// middlware for storing the images, files, data on server in public
app.use(express.static("./public"));
export {app};

// middleware for cookie-parser 
app.use(cookieParser());