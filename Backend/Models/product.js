const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    ProductId: Number,
    ProductName: String,
    Brand: String,
    Price: Number,
    ReleaseDate: Date
})

const product = mongoose.model('product', productSchema)
module.exports = product;