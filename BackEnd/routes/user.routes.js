const router = require("express").Router()
const auth = require("../app/middleware/auth.middleware")

const userController = require("../app/controller/user.controller")

router.post("/register",userController.register)
router.get("/allUsers/:pageNumber/:limit",userController.allUsers)
router.get("/allUsers",userController.allUsers)
router.get("/singleUser/:id",userController.singleUser)
router.get("/me",auth, userController.me)
router.post("/login",userController.login)
router.post('/logout',auth, userController.logOut)


module.exports = router