import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    orderPrice:{
        type: Number,
        required: true
    },
    orderQuantity:{
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    orderItems: [orderItemSchema], 
    address:{
        type: String,
        required: true
    },
    orderStatus:{
        type: String,

        // optional values, to be selected from these values only

        enum: ["Pending", "Shipped", "Delivered"],
        default: "Pending"
    }

},
{timestamps: true}
)

export const Order = mongoose.model("Order",orderSchema);