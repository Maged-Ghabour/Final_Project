require("./database/connect")
const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")


const userRoutes = require("../routes/user.routes")
const productRoutes = require("../routes/product.routes")

// const adminRoutes = require("../routes/admin.routes")

app.use(cors())
app.use(express.static(path.join(__dirname,"../public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/user",userRoutes)
app.use("/product",productRoutes)



app.get("*", (req,res)=>{
    res.status(500).send({
        error : "invalid URL",
        apiStatus : false
    })
})    

app.post("*", (req,res)=>{
    res.status(500).send({
        error : "invalid URL",
        apiStatus : false
    })
}) 




module.exports=app
