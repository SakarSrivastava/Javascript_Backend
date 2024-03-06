import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        typeof: 'string',
        required: true,
    },
    description:{
        type: 'string',
    },
    productImage:{
        type:'string',  // because images are not stored in the database, a url from 3rd party is given for different format.
    },
    price:{
        type: 'number',
        default:0,
        required: true
    },
    stock:{
        type: 'number',
        default:0
    },
    category:{
        type: mongoose.Schema.type.ObjectId,
        ref: "Category",
        required: true,
        owner: mongoose.Schema.type.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
});

export const Product = mongoose.model("Product", productSchema);