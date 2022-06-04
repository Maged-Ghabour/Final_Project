const mongoose = require("mongoose")
const OrderSchema = mongoose.Schema({
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

    ],
    amount :{
        type:Number,
        required:true
    },
    addresses:[
        {
            address:{
                addrCity:{
                    type:String,
                    trim:true,
                    required:true
                },
                addrDetails:{
                    type:String,
                    trim:true,
                    required:true
                },
                addrBuildingNum:{
                    type:Number,
                    min:1,
                    max:5000
                }
            }
        }
    ],
    status:{
        type:String,
        default:"pending"
    }
},{timeStamps:true })

const Order = mongoose.model("Product",OrderSchema)
module.exports = Order