import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    markedAsDone: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy:{
        // to take reference from another schema, use Type: mongoose.Schema.Types.ObjectId

        type: mongoose.Schema.Types.ObjectId,

         // refers to the => name of the reference MODEL
         
        ref: "User"
       
    },
    subTodos: [
        {
            type: mongoose.Schema.type.ObjectId,
            ref: "SubTodos"
        }
    ]
    // it is array of subTodos
},
{timestamps: true})

export const Todo = mongoose.model("Todos",todoSchema);