// const mongoose = require('mongoose');

// const cartItemSchema = new mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     default: 1,
//   },
// });

// const cartSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User', 
//       required: true,
//     },
//     items: [cartItemSchema],
//   },
//   {
//     timestamps: true,
//   }
// );

// const cartModel = mongoose.model('Cart', cartSchema);
// module.exports={cartModel}
const mongoose = require('mongoose');
const cartItemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
})
const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [cartItemsSchema]
})
const cartModel = mongoose.model('Cart', cartSchema);
module.exports={cartModel}