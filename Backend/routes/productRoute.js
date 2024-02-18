const express = require('express')
const router = express.Router()
const Joi = require('joi')
const Product = require('../Models/product')

router.get('/get', async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        console.error(err)
    }
})

// Route for adding a review to an existing product
router.post('/add-review/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const review = {
            reviewer_name: req.body.reviewer_name,
            review_content: req.body.review_content,
            rating: req.body.rating,
            review_date: req.body.review_date,
        };

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $push: { ridiculous_reviews: review } },
            { new: true }
        );

        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Route to update(patch) the previous written review
router.patch('/edit-review/:reviewId', async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
        const result = await Product.findOneAndUpdate(
            { 'ridiculous_reviews._id': reviewId }, // Match the _id within the ridiculous_reviews array
            { 
                $set: {
                    'ridiculous_reviews.$.reviewer_name': req.body.reviewer_name,
                    'ridiculous_reviews.$.review_content': req.body.review_content,
                    'ridiculous_reviews.$.rating': req.body.rating,
                    'ridiculous_reviews.$.review_date': req.body.review_date
                }
            },
            { new: true }
        );

        if (result) {
            res.json(result);
        } else {
            console.log("No document found matching the query criteria.");
            res.status(404).json({ error: "No document found matching the query criteria." });
        }

    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ error: error.message });
    }
});























module.exports = router