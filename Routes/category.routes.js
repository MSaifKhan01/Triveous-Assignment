const express=require("express")
const {addCategory,getAllCategory,getCategoryByID, updateCategory, deleteCategory}=require("../Controllers/category.controller")


const categoryRouter=express.Router()
categoryRouter.post("/add",addCategory)
categoryRouter.get("/get",getAllCategory)
categoryRouter.get("/get/:categoryID",getCategoryByID)
categoryRouter.patch("/update/:categoryID",updateCategory)
categoryRouter.delete("/delete/:categoryID",deleteCategory)

module.exports={categoryRouter}