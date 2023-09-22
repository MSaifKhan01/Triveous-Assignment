const express=require("express")
const { addToCart, getAllCartItems, incrementQuantity, decrementQuantity, removeCartItems } = require("../Controllers/cart.controller")



const cartRouter=express.Router()
cartRouter.post("/addtocart/:productID",addToCart)
cartRouter.get("/get",getAllCartItems)
cartRouter.patch("/inc/:productID",incrementQuantity)
cartRouter.patch("/dec/:productID",decrementQuantity)
cartRouter.delete("/delete/:productID",removeCartItems)

module.exports={cartRouter}