import mongoose from "mongoose";
import  {bcrypt} from "bcrypt"
import { JsonWebTokenError } from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        index: true
    },
    fullname:{
        type: String,
        required: true,
        trim:true,
        index: true
    },
    avatar:{
        type: String, // cloudinary url
        required: true
    },
    coverImage:{
        type: String, // cloudinary url
        required: true
    },
    watchHistory:[
        {
            type: mongoose.Schema.type.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken:{
        type: String,
        required: [true, "Refresh token is required"]
    }
},{timestamps:true})


userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        next();
    }

    next();
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
)
}


userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
)
}


const User = mongoose.model("User", userSchema);