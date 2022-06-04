const userModel = require("../database/models/user.model")

class User{
    static register = async(req,res)=>{
        try {
            const user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus : true,
                data : user ,
                message : "User Added Successfully"
            })
            
        } catch (error) {
            res.status(500).send({
                apiStatus : false,
                data : error.message,
                message : "User Adding Failed"
            })
        }
    }
    static login  = async(req,res)=>{
        try {
             let user = await userModel.login(req.body.email , req.body.password)
             let token = await user.generateToken()
 
             res.status(200).send({
                     apiStatus : true,
                     data : {user , token} ,
                     message : "User Login in"
             })
 
            
        } catch (error) {
         res.status(500).send({
             apiStatus : false,
             data : error.message ,
             message : "Invalid Login"
     })
        }
    }
    static me = async(req,res)=>{
        res.send(req.user)
    }
    
    static allUsers = async(req,res)=>{
        try {

            const limitCount = Number((req.params.limit))
            const skipCount = Number((req.params.pageNumber))*limitCount
            let users = await userModel.find().skip(skipCount).limit(limitCount)

            res.status(200).send({
                apiStatus : true,
                data : users ,
                message : "Data Fetched"
            })
            
        } catch (error) {
            res.status(500).send({
                apiStatus : false,
                data : error.message,
                message : "Error in Fetching"
            })
        }
    }

    static singleUser = async(req,res)=>{
        try {
            let user = await userModel.findById(req.params.id)
            
            if(!user){
                return res.status(404).send({
                    apiStatus : false,
                    data : {} ,
                    message : "User Not Found"
                })
            }

            res.status(200).send({
                apiStatus : true,
                data : user ,
                message : "Data Fetched"
            })
            
        } catch (error) {
            res.status(500).send({
                apiStatus : false,
                data : error.message,
                message : "Error in Fetching"
            })
        }
    }

    static logOut = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(singleToken =>{
                return singleToken.token != req.token
            } )
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out",
                data:{}
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"error on logout"})
        }
    }

    
}
module.exports = User