const express = require('express')
const router = express.Router()
const Product = require('../Models/product')

router.get('/get', async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        console.error(err)
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const product1 = await Product.findById(req.params.id)
        res.json(product1)
    } catch (err) {
        res.send(err)
    }
})

// Route for creating product details
router.post('/create', async (req, res) => {
    try {
        const productinfo = new Product({
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            description: req.body.description,
            images: req.body.images,
            average_rating: req.body.average_rating,
        });

        const newProduct = await productinfo.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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


router.patch('/patch/:id', async (req, res) => {
    try {
        const existingProduct = await Product.findById(req.params.id)

        existingProduct.name = req.body.name
        existingProduct.brand = req.body.brand
        existingProduct.category = req.body.category
        existingProduct.description = req.body.description
        existingProduct.images = req.body.images
        existingProduct.average_rating = req.body.average_rating
        existingProduct.reviewer_name = req.body.reviewer_name
        existingProduct.review_content = req.body.review_content
        existingProduct.rating = req.body.rating
        existingProduct.review_date = req.body.review_date

        const updatedProduct = await existingProduct.save()
        res.json(updatedProduct)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const removedProduct = await Product.findByIdAndDelete(req.params.id)

        if (!removedProduct) {
            return res.status(404).json({ error: 'Product not found' }); 
        }

        res.json(removedProduct)
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router