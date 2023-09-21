const express=require("express")
const {getAllProducts,getProductDetail,addProduct}=require("../Controllers/product.controller")


const productRouter=express.Router()
productRouter.post("/add",addProduct)
productRouter.get("/get",getAllProducts)
productRouter.get("/get/productID",getProductDetail)

module.exports={productRouter}