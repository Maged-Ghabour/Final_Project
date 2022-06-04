const mongoose = require("mongoose")
const CartSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    products:[
        {
            produtId:{
                type:String,

            },
            quantitiy:{
                type:Number,
                default:1
            }
        }

    ]
},{timeStamps:true })

const Cart = mongoose.model("Product",CartSchema)
module.exports = Cart