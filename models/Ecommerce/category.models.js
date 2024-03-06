import mongoose, { mongo } from "mongoose";

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    }
},
{timestamps: true})

export const Category = mongoose.model("Category",categorySchema);