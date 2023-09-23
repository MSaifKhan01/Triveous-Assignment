const express=require("express")
const {getAllProducts,getProductDetail,addProduct, getProductsByCategory, updateProduct, deleteProduct}=require("../Controllers/product.controller")
const { rateLimit } = require("../Middleware/rateLimiter")


const productRouter=express.Router()
productRouter.post("/add",addProduct)
productRouter.get("/get",rateLimit, getAllProducts)
productRouter.get("/get/:productID",getProductDetail)
productRouter.get("/category/:categoryID",getProductsByCategory)
productRouter.put("/update/:productID",updateProduct)
productRouter.delete("/delete/:productID",deleteProduct)

module.exports={productRouter}