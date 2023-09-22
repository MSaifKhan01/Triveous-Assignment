const mongoose = require("mongoose");

const orderStatusSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered'],
        default: 'Pending',
    },
    timestamp: { type: Date, default: Date.now },
    description: { type: String },
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: { type: Number, required: true },
        },
    ],
    orderStatus: orderStatusSchema,
    total: { type: Number, required: true },
});


const orderModel = mongoose.model("Order", orderSchema);

module.exports = { orderModel };