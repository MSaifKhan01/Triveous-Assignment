const { productModel } = require("../Models/product.model")
const {categoryModel}=require("../Models/category.model")
const getAllProducts = async (req, res) => {
    try {
        const Data = await productModel.find();
        if (!Data || Data.length === 0) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "No products found",
                Data: [],
            });
        }
        return res.status(200).json({
            status: 200,
            success: true,
            message: "All products retrieved successfully",
            Data: Data,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            error: "Something wrong",
            message: error.message,
        });
    }
};
// Get product details by ID
const getProductDetail = async (req, res) => {
    try {
        const { productID } = req.params;
        // Find the product by ID
        const Data = await productModel.findById(productID );

        if (!Data || Data.length==0) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "product not found",
                Data: [],
            });
        }
         // Respond with a 200 status if successful
    return res.status(200).json({
        status: 200,
        success: true,
        message: "Product details retrieved successfully",
        Data: Data,
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
// Add a new product
const addProduct= async(req,res)=>{
    try {
        const { title, price, description, availability, category ,image} = req.body;
      // Check if the specified category exists
    const getcategory = await categoryModel.findById(category);

    if (!getcategory) {
      // Respond with a 404 status if the category is not found
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Category not found",
      });
    }

    // Create a new product and save it
    const newProduct = new productModel({
      title,
      price,
      description,
      availability,
      category,
      image
    });
    await newProduct.save();

    // Respond with a 201 status if the product is successfully added
    return res.status(201).json({
      status: 201,
      success: true,
      message: "Product added successfully",
      Data: newProduct,
    });
  } catch (error) {
    // Log the error and respond with a 500 status for server errors
  
    res.status(500).json({
      status: 500,
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }

}

module.exports={
    getAllProducts,getProductDetail,addProduct
}