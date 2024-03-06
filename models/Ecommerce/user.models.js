import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowerCase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowerCase:true
    }
})

export const User = mongoose.model("User",userSchema);