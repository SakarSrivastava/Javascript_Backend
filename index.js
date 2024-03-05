import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
})

app.get("/twitter",(req,res)=>{
    res.send("<h1>Twitter Page</h1>");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
})