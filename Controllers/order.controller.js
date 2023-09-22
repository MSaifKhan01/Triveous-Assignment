const { cartModel } = require("../Models/cart.model")
const { orderModel } = require("../Models/order.model")

const placeOrder = async (req, res) => {
    try {
        const userID = req.userID

        const cart = await cartModel.findOne({ userID }).populate('products.product')
        // Checking the cart is Empty or Not
        if (!cart || cart.products.length == 0) {
            return res.status(400).json({ msg: "Cannot Place Order,cart is Empty", success: false })
        }

        // calculating the total Order Price
        const totalPrice = cart.products.reduce((Total, curr) => {
            return Total + curr.quantity * curr.product.price
        }, 0)

        // Creating New Order
        const newOrder = new orderModel({
            user: userID,
            items: cart.products.map((ele) => {
                return {
                    product: ele.product._id,
                    quantity: ele.quantity
                }
            }),
            total: totalPrice.toFixed(2),
            orderStatus: {
                status: "Pending",
                description: "Order Placed Succesfully"
            }

        })
        await newOrder.save()

        // making cart empty after order Placed
        cart.products = []
        await cart.save()

        return res.status(200).json({ msg: "Order Placed Succesfully", success: true, data: newOrder })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Unable to Place Order,Server Error',
            msg: error.message
        })
    }
}
const getorderHistory = async (req, res) => {
    try {
        const userID = req.userID
        const data = await orderModel.find({ user: userID }).populate('items.product')
        if (!data) {
            return res.status(404).json({ msg: "Order Details Not Found", success: false })
        }
        return res.status(200).json({ data, success: true })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}

const getOrderDetails = async (req, res) => {
    try {
        const { orderID } = req.params
        const userID = req.userID
        // find order of logedIn user and with order id
        const OrderPresent = await orderModel.findOne({ user: userID, _id: orderID }).populate('items.product')

        if (!OrderPresent) {
            return res.status(404).json({ msg: "Order Not Found" })
        }

        return res.status(200).json({ data: OrderPresent, success: true })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const { orderID } = req.params
        const { status } = req.body
        const order = await orderModel.findById(orderID)
        if (!order) {
            return res.status(400).json({ msg: "Order Not Found , Please Try Again", success: false })
        }
        order.orderStatus.status = status
        await order.save()
        return res.status(200).json({ msg: "Status Updated Succesfully", success: true, data: order })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}

module.exports = { placeOrder, getorderHistory, getOrderDetails, updateOrderStatus }