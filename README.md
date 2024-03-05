# BACKEND

- npm init

- npm i express dotenv

### basic express app

=> create .env file to write details that are private.

=> create .gitignore , include node_modules, dotenv

=>

import express from "express"
import dotenv from "dotenv"

const app = express();

doenv.config();

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Home Route");
})

app.listen(PORT,()=>{
    clg(`Server started at port: ${PORT}`)
})


