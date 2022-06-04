const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user.model")

const auth = async(req,res,next)=>{
    try {
       const token = req.header("Authorization").replace("Bearer ","")
       const decodeToken = jwt.verify(token,process.env.JWTKEY)
    //    res.send({token,decodeToken})
    const user = await userModel.findOne({
        _id: decodeToken._id, 
        'tokens.token': token
    })

    if(!user) throw new Error ("user not found")
    req.user = user
    req.token = token
    next()


    } catch (e) {
       res.status(500).send({
           apiStatus : false,
           data : e.message,
           message:"unauthorized"
       }) 
    }
}

module.exports = auth 