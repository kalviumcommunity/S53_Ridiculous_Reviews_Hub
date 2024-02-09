const express = require('express')
const router = express.Router()
const Comment = require('../Models/comment')

router.get('/', async (req,res) => {
    try {
        const comments = await Comment.find({})
        res.json(comments)
    } catch(err) {
        console.error(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const comment1 = await Comment.findById(req.params.id)
        res.json(comment1)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const commentinfo = new Comment({
        CommentId: req.body.CommentId,
        ReviewId: req.body.ReviewId,
        UserId: req.body.UserId,
        CommentText: req.body.CommentText,
        CommentDate: req.body.CommentDate
    })

    try {
        const comment1 = await commentinfo.save()
        res.json(comment1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const existingComment = await Comment.findById(req.params.id)
        existingComment.CommentId = req.body.CommentId
        existingComment.ReviewId = req.body.ReviewId
        existingComment.UserId = req.body.UserId
        existingComment.CommentText = req.body.CommentText
        existingComment.CommentDate = req.body.CommentDate

        const updatedComment = await existingComment.save()
        res.json(updatedComment)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedComment = await Comment.findByIdAndDelete(req.params.id)

        if (!removedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.json(removedComment)
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router