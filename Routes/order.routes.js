const express = require('express');
const { placeOrder, getorderHistory, getOrderDetails, updateOrderStatus } = require('../Controllers/order.controller');
const orderRouter = express.Router()

// Place Order by User
orderRouter.post("/placeOrder", placeOrder)

// User Can see Order History
orderRouter.get('/orderHistory', getorderHistory)

// Get Order Details by OrderID
orderRouter.get('/orderDetails/:orderID', getOrderDetails)

//update Order Status by OrderID
orderRouter.patch('/update/:orderID', updateOrderStatus)

module.exports = { orderRouter }