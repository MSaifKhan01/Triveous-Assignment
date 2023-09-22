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

    // Respond with a 200 status if the product is successfully added
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Product added successfully",
      Data: newProduct,
    });
  } catch (error) {
    // and respond with a 500 status for server errors
  
    res.status(500).json({
      status: 500,
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }

}




// Get products by category ID
const getProductsByCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;

    // Find products by category ID and populate category details
    const categorizedProducts = await productModel
      .find({ category: categoryID })
      .populate("category");

    if (!categorizedProducts.length) {
      // Respond with a 404 status if no products are found
      return res.status(404).json({
        status: 404,
        success: false,
        message: "No products found for this category",
      });
    }

    // Respond with a 200 status if successful
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Products retrieved successfully by Category ID",
      data: categorizedProducts,
    });
  } catch (error) {
    //  respond with a 500 status for server errors
   
    res.status(500).json({
      status: 500,
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};


// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const { title, price, description, availability ,image} = req.body;
    

    // Check if the product with the provided productId exists
    const product = await productModel.findByIdAndUpdate(
      productID,
      {
        $set: {
          title: title,
          price: price,
          description: description,
          availability: availability,
          image:image
        },
      },
      { new: true }
    );

    if (!product) {
      // Respond with a 404 status if the product is not found
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }

    // Respond with a 200 status if the product is successfully updated
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    //  respond with a 500 status for server errors
  
    res.status(500).json({
      status: 500,
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

// // Delete an existing product
const deleteProduct = async (req, res) => {
  try {
    const { productID } = req.params;

    // Check if the product with the provided productId exists
    const product = await productModel.findById(productID);
    if (!product) {
      // Respond with a 404 status if the product is not found
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }

    // Delete the product
    await productModel.findByIdAndDelete(productID);

    // Respond with a 200 status (No Content) for a successful deletion
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    // respond with a 500 status for server errors
  
    res.status(500).json({
      status: 500,
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};


module.exports={
    getAllProducts,getProductDetail,addProduct,getProductsByCategory,updateProduct,deleteProduct
}