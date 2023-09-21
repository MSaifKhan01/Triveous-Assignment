const { categoryModel } = require("../Models/category.model");


const addCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const category = new categoryModel({ name });
        await category.save();

        return res.status(201).json({
            status: 201,
            success: true,
            message: "Category created successfully",
            data: category,
        });
    } catch (error) {
       
        res.status(500).json({
            status: 500,
            success: false,
            error: "Internal Server Error",
            message: error.message,
        });
    }

}

const getAllCategory=async(req,res)=>{
    try {
        const data= await categoryModel.find()
        if (!data || data.length==0) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "product not found",
                Data: [],
            });
        }
        return res.status(200).json({data,success:true})
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            error: "Internal Server Error",
            message: error.message,
        });
    }
}

const getCategoryByID=async(req,res)=>{
    try {
        const {categoryID}=req.params
        const data= await categoryModel.findById(categoryID)
        return res.status(200).json({data,success:true})
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            error: "Internal Server Error",
            message: error.message,
        });
    }
}

module.exports={
    addCategory,getAllCategory,getCategoryByID
}