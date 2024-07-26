const mongoose = require('mongoose');

// Define the Product schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    product_des: String
});

// Create and export the Product model
const ProductModel = mongoose.model('Products', ProductSchema)
module.exports = ProductModel
