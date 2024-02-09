const express = require('express')
const router = express.Router()
const Review = require('../Models/review')

router.get('/', async (req,res) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch(err) {
        console.error(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const review1 = await Review.findById(req.params.id)
        res.json(review1)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const reviewinfo = new Review({
        ReviewId: req.body.ReviewId,
        UserId: req.body.UserId,
        ProductId: req.body.ProductId,
        Rating: req.body.Date,
        ReviewText: req.body.ReviewText,
        SubmissionDate: req.body.SubmissionDate
    })

    try {
        const review1 = await reviewinfo.save()
        res.json(review1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const existingReview = await Review.findById(req.params.id)
        existingReview.ReviewText = req.body.ReviewText
        existingReview.ReviewId = req.body.ReviewId
        existingReview.ProductId = req.body.ProductId
        existingReview.Rating = req.body.Rating
        existingReview.ReviewText = req.body.ReviewText
        existingReview.SubmissionDate = req.body.SubmissionDate

        const updatedReview = await existingReview.save()
        res.json(updatedReview)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedReview = await Review.findByIdAndDelete(req.params.id)

        if (!removedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.json(removedReview)
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router