const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    average_rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    ridiculous_reviews: [{
        reviewer_name: {
            type: String,
            required: true
        },
        review_content: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        review_date: {
            type: Date,
            required: true
        }
    }]
});

const product = mongoose.model('product', productSchema);

module.exports = product;
