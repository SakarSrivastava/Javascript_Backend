import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    },

    password:{
        type: String,
        required: true,
        
        // we can also give custom messages, so we pass an array => [valid data, message if invalid data comes]

        minLength: [6, "Password Length must be more than 6"],
        maxLength: [15, "password must be less than 15"]
    },
},   

// pass  second object for the timestamps => createdAt, updatedAt

{
    timestamps: true
}

)

export const User = mongoose.model('User', userSchema);

// model name => User
// model name in mongoDb => users (plural, adds 's' , in lowerCase )