const mongoose  = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// userSchema.virtual("myProduct",{
//     ref:"Product",
//     localField:"_id",
//     foreignField:"userId"
// })


const userSchema = mongoose.Schema({

        name:{
            type:String,
            trim:true,
            required:[true , "Name is required"],
            minlength:4
        },
        email:{
            type:String,
            trim : true,
            required: [true , "Email is required"], 
            unique:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value)) throw new Error ("Invalid Email")
            }
        },
        password:{
            type : String,
            trim : true,
            required : true,
            
        },
        phone :{
            type : String,
            trim:true,
            required:true,
            validate(value){
                if(!validator.isMobilePhone(value , "ar-EG")) throw new Error("invalid Mobile Number") 
            }
        },
        age :{
            type : Number,
            required: true,
            min:9,
            max:70
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        // gender:{
        //     type : String,
        //     trim:true,
        //     required:true,
        //     lowercase:true,
        //     enum:["male","female"]
        // },
        // status:{
        //     type:Boolean,
        //     default:false,
        // },
        // image:{
        //     type:String,

        // },
        // addresses:[
        //     {
        //         address:{
        //             addrCity:{
        //                 type:String,
        //                 trim:true,
        //                 required:true
        //             },
        //             addrDetails:{
        //                 type:String,
        //                 trim:true,
        //                 required:true
        //             },
        //             addrBuildingNum:{
        //                 type:Number,
        //                 min:1,
        //                 max:5000
        //             }
        //         }
        //     }
        // ],
       
        tokens:[
            {
                token:{
                    type:String,
                    trim:true,
                    required:true
                }

            }
        ],


        

},{
    timestamps : true
})


//to JSON 
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    delete user.tokens
    // delete user.tokens
    return user
    
}
//pre 
userSchema.pre("save",async function(){
    const userData = this;
   

    if(userData.isModified("password")){
        userData.password = await bcrypt.hash(userData.password,10)
    }
    
})

// Login 
userSchema.statics.login = async(email , password)=>{
    const user = await User.findOne({email})
    if (!user)  throw new Error ("invalid Email")
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) throw new Error ("invalid Password")
    return user;
}


// Add Token 

userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.JWTKEY) 
    user.tokens = user.tokens.concat( { token } ) 
    await user.save()
    return token
}



const User = mongoose.model("User" , userSchema)
module.exports = User