const express=require("express")
const {addCategory,getAllCategory,getCategoryByID}=require("../Controllers/category.controller")


const categoryRouter=express.Router()
categoryRouter.post("/add",addCategory)
categoryRouter.get("/get",getAllCategory)
categoryRouter.get("/get/:categoryID",getCategoryByID)

module.exports={categoryRouter}