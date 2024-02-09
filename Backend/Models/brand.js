const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    BrandId: Number,
    BrandName: String
})

const brand = mongoose.model('brand', brandSchema)
module.exports = brand;