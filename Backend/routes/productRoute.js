const express = require('express')
const router = express.Router()
const Product = require('../Models/product')
const validateReview  = require('../Validation/Validation')

router.get('/get', async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        console.error(err)
    }
})

// to get the review
router.get('/get/review/:reviewId', async (req, res) => {
    try {
        const reviewId = req.params.reviewId;

        // Find the review in all products
        const products = await Product.find({});
        let foundReview = null;

        products.forEach(product => {
            const review = product.ridiculous_reviews.id(reviewId);
            if (review) {
                foundReview = review;
                return;
            }
        });

        if (!foundReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json(foundReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});




// Route for adding a review to an existing product
router.post('/add-review/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const reviewData = req.body;

        // Validate review data
        const { error } = await validateReview(reviewData);
        if (error) {
            return res.status(400).json({ error: error.details });
        }

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
    const reviewData = req.body;


    // Validate review data
    const { error } = await validateReview(reviewData);
    if (error) {
        return res.status(400).json({ error: error.details });
    }

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

// Route to delete the review
router.delete('/delete-review/:reviewId', async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
        const result = await Product.findOneAndUpdate(
            // Match the _id within the ridiculous_reviews array
            { 'ridiculous_reviews._id': reviewId }, 
            // Remove the review with the specified _id from the array
            { $pull: { 'ridiculous_reviews': { _id: reviewId } } },
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