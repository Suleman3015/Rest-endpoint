const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["samsung","apple","huawei"],
            message:"value is not supported"
        }
    }
})

module.exports = mongoose.model('Product',ProductSchema)