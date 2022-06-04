const mongoose = require("mongoose")
const ProductSchema = mongoose.Schema({

    // userId : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref : "User",
    //     require : true
    // },
    productTitle:{
        type:String,
        trim : true,
        required : true,
    },
    // productCat:{
    //     type:Array

    // },
    productdesc:{
        type:String,
        trim:true,
        required:true

    },
    productImage:{
        type:String,
        required:true
        
    },
    productColor:{
        type:String,
    },
    productSize:{
        type:String
    },
    productPrice:{
        type:Number,
        required:true
    }
},{timeStamps:true })

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product