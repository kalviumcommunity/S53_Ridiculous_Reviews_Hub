const mongoose = require('mongoose')

const categorySchema= new mongoose.Schema({
    CategoryId: Number,
    CategoryName: String
})

const category = mongoose.model('category', categorySchema)
module.exports = category;