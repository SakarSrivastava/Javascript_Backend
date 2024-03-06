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


# DATA MODELS

const SchemaName = new mongoose.Model({

 <!-- - simple model -->

    user:{
        type: 'string',
        required: true,
        unique: true,
        min: [6,"there should be more than 6 characters"],
        max: 15
    },

<!-- model refering other model -->
    ProductId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"      

        // it is the name of the model for a schema.

    },

<!-- giving the options to be selected -->

    orderStatus:{
        type: String,

        // optional values, to be selected from these values only

        enum: ["Pending", "Shipped", "Delivered"],
        default: "Pending"
    }

},{timestamps: true})


const User = mongoose.Model("User", userSchema)