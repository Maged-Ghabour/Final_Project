// const adminModel = require("../database/models/admin.model")
// class Admin{
//     static addProduct = async(req,res)=>{
    
//         try {
//             const product = new adminModel({
//                 ...req.body , userId : req.user._id
//             })
//             await product.save()
//             res.status(200).send({
//                 apiStatus : true,
//                 data : product ,
//                 message:"Product Add Successfully"
//             })
//         }catch (e) {
//             res.status(500).send({
//                 apiStatus : false,
//                 data : e.message ,
//                 message:"Product Adding Failed"
//             })
//         }

//     }
//     static allProduct = async(req,res)=>{
//         try {
//             const produts = await adminModel.find()
//             res.status(200).send({
//                 apiStatus : true,
//                 data : produts,
//                 message : "Data Loaded"
//             })
//         } catch (e) {
//             res.status(500).send({
//                 apiStatus : false,
//                 data : e.message,
//                 message : "Error Loading Product"
//             })
//         }
//     }
//     static myProduct = async(req,res)=>{
//         const product = adminModel.findOne({adminId : req.admin._id})
//     }
// }

// module.exports = Admin