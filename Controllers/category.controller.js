const { categoryModel } = require("../Models/category.model");

// Create a new category
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


// Get all categories
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


// Get category by Id
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

// Update category by Id

const updateCategory=async(req,res)=>{
    try {
        const {categoryID}=req.params
        const { name } = req.body;

        const category = await categoryModel.findByIdAndUpdate(
            categoryID,
          { name},
          { new: true }
        );
    
        if (!category) {
          return res.status(404).json({
            status: 404,
            success: false,
            message: "Category not found",
          });
        }
    
        return res.status(200).json({
          status: 200,
          success: true,
          message: "Category updated successfully",
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



// Delete category by Id
const deleteCategory = async (req, res) => {
    try {
      const { categoryID } = req.params;
      const category = await categoryModel.findById(categoryID);
  
      if (!category) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: "Category not found",
        });
      }
  
      await categoryModel.findByIdAndDelete(categoryID);

      return res.status(200).json({
        status: 200,
        success: true,
        message: "Category deleted successfully",
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
  };

module.exports={
    addCategory,getAllCategory,getCategoryByID,updateCategory,deleteCategory
}