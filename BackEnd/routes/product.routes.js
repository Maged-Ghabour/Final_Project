const router = require("express").Router()
const upload = require("../app/middleware/uploadFile")
const auth = require("../app/middleware/auth.middleware")
const productController = require("../app/controller/product.controller")


router.post("/addProduct",upload.single('productImage'),productController.addProduct)
router.get("/allProducts",productController.allProduct)
router.get("/myproduct",productController.myProduct)
router.get("/singleProduct/:id",productController.singleProduct)
router.delete("/delProduct/:id",productController.delProduct)
router.put("/updateProduct/:id",productController.updateProduct)
module.exports = router
