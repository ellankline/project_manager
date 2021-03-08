const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Title: String,
    Price: Number,
    Description: String
}, {timestamps: true});
module.exports = mongoose.model("Product", ProductSchema);