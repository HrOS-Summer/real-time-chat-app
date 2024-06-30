import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male", "female"]
    }, 
    profilePic:{
        type:String,
        default: ""
    }
    //createdAt, updatedAt
}, {timestamps:true});

const User = mongoose.model("User", userSchema); //here "User" insode mongoose.model should always be capitalize i.e, User, People etc

export default User;