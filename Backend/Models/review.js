const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    ReviewId: Number,
    UserId: Number,
    ProductId: Number,
    Rating: Number,
    ReviewText: String,
    SubmissionDate: Date
})

const review = mongoose.model('review', reviewSchema)
module.exports = review;