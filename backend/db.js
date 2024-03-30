require('dotenv').config(); // Load environment variables from .env file

const mongoose = require("mongoose");
const { Schema, number } = require("zod");

mongoose.connect(process.env.MONGODB_URI); // Use process.env to access environment variables

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:3,
        maxlength:30,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    firstName:{
        type: String,
        required:true,
        maxlength:30,
        trim:true
    },
    lastName:{
        type: String,
        required:true,
        maxlength:30,
        trim:true
    }

});

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    balance:{
        type:Number,
        require:true
    }
})
const Account = mongoose.model('Account',accountSchema)
const User = mongoose.model('User',userSchema);

module.exports = {
    User,
    Account,
};
