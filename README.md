

# DATA MODELS

### TEMPLATE

=> import mongoose from 'mongoose';

=>  

const SchemaName = new mongoose.Schema({

},{timestamps: true});


=>  

const ModelName = mongoose.model('ModelName',referedSchema);


example :

const userSchema = new mongoose.Model({

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