const productModel = require("../database/models/product.model")
const path = require("path")
const fs = require("fs")

const upload = require("../middleware/uploadFile")



class Product{
    static addProduct = async(req,res)=>{
    
        
        try {
            let file = (req.file.path) + (path.extname(req.file.originalname)).toLocaleLowerCase()
            
            console.log(file);
            fs.rename(req.file.path , file , ()=>{})
            let fileName = file.replace("public" , "")
            const product= new productModel({...req.body ,productImage:fileName})//userId : req.user._id
       
          
           
            await product.save()
            res.status(200).send({
                apiStatus : true,
                data : product ,
                message:"Product Add Successfully"
            })
        }catch (e) {
            res.status(500).send({
                apiStatus : false,
                data : e.message ,
                message:"Product Adding Failed"
            })
        }

    }
    static allProduct = async(req,res)=>{
        try {
            const produts = await productModel.find()
            res.status(200).send({
                apiStatus : true,
                data : produts,
                message : "Data Loaded"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus : false,
                data : e.message,
                message : "Error Loading Product"
            })
        }
    }
    static singleProduct = async(req,res)=>{
        try {
            const produts = await productModel.findById(req.params.id)
            res.status(200).send({
                apiStatus : true,
                data : produts,
                message : "product Loaded"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus : false,
                data : e.message,
                message : "Error Loading Product"
            })
        }
    }
    static myProduct = async(req,res)=>{ 
        try {
            const product = productModel.findOne({userId : req.user._id})
            res.status(200).send({
                apiStatus : true,
                data : product,
                message : "Data Loaded"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus : false,
                data : e.message,
                message : "Error Loading Product"
            })
        }
    }
    static delProduct = async(req,res)=>{
        try{
            const product = await productModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus : true,
                data : product,
                message : "Data Loaded"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus : false,
                data : e.message,
                message : "Error Loading Product"
            })
        }
    }
    static updateProduct = async(req,res)=>{
        try {
            const product = await productModel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
            res.status(200).send({
                apiStatus : true,
                data : product,
                message : "Data Updated"
            })
        
        } catch (e) {
            res.status(500).send({
                apiStatus : false,
                data : e.message,
                message : "Error Updated Product"
            })
        }
    }
}

module.exports = Product
