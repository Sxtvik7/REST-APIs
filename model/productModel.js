const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:String,
    descriptions:String,
    price:Number
})

//creating collection/model (name-Product)
const Product = new mongoose.model("Product", productSchema)

module.exports= Product;