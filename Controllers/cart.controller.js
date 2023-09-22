const {cartModel}=require("../Models/cart.model")

const addToCart = async (req, res) => {
    try {
        const userID = req.userID
        const { productID } = req.params

        if (!productID) {
            return res.status(400).json({ msg: "Product Id is Not Provided", success: false })
        }

        const cart = await cartModel.findOne({ userID })
        //If cart Does Not Exists Create new One
        if (!cart) {
            const createCart = new cartModel({
                userID,
                products: [{ product: productID, quantity: 1 }]
            })
            await createCart.save()
            return res.status(200).json({ msg: "Product Added to Cart Succesfully", success: true })
        } else {
            // Check the product present in the Cart
            const productIndex = cart.products.findIndex((item) => item.product.toString() == productID)
            if (productIndex !== -1) {
                return res.status(400).json({ msg: "Product Already in the Cart", success: false })
            }
            // if Product is not Present and Cart is Present then Add Product to cart
            cart.products.push({ product: productID, quantity: 1 })
            await cart.save()
            return res.status(200).json({ msg: "Product Added to Cart Succesfully", success: true })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
const getAllCartItems = async (req, res) => {
    try {
        const userID = req.userID
        const data = await cartModel.findOne({ userID }).populate('products.product')
        if (!data || data.products.length == 0) {
            return res.status(404).json({ msg: "Your Cart is Empty!", success: false })
        }
        return res.status(200).json({ data: data.products, success: true })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
const incrementQuantity = async (req, res) => {
    try {
        const { productID } = req.params
        const userID = req.userID
        const cart = await cartModel.findOne({ userID })
        if (!cart) {
            return res.status(404).json({ msg: "Cart Not found", success: false })
        }
        const productIndex = cart.products.findIndex((item) => item.product.toString() == productID)
        if (productIndex !== -1) {
            cart.products[productIndex].quantity++;
            await cart.save()
            return res.status(200).json({ msg: "Product Quantity Increased" })
        }
        return res.status(404).json({ msg: "Product Not Found in Cart" })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }

}
const decrementQuantity = async (req, res) => {
    try {
        const { productID } = req.params
        const userID = req.userID
        const cart = await cartModel.findOne({ userID })
        if (!cart) {
            return res.status(404).json({ msg: "Cart Not found", success: false })
        }
        const productIndex = cart.products.findIndex((item) => item.product.toString() == productID)
        // if Index is Found And NotEqual to -1
        if (productIndex !== -1) {
            if (cart.products[productIndex].quantity > 1) {
                cart.products[productIndex].quantity--;
            } else {
                cart.products.splice(productIndex, 1) // Remove the Product From the cart if Quantity < 1
            }
            await cart.save()
            return res.status(200).json({ msg: "Product Quantity Updated" })
        }
        // if Index is -1 
        return res.status(404).json({ msg: "Product Not Found in Cart" })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }

}
const removeCartItems = async (req, res) => {
    try {
        const { productID } = req.params
        const userID = req.userID
        const cart = await cartModel.findOne({ userID })
        if (!cart) {
            return res.status(404).json({ msg: "Cart not Found" })
        }
        const ProductIndex = cart.products.findIndex((item) => item.product.toString() == productID)
        if (ProductIndex !== -1) {
            cart.products.splice(ProductIndex, 1)
            await cart.save()
            return res.status(200).json({ msg: "Product Removed Succesfully" })
        }
        return res.status(404).json({ msg: "Product Not Found in the Cart" })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}

module.exports = {
    addToCart,
    getAllCartItems,
    incrementQuantity,
    decrementQuantity,
    removeCartItems
}