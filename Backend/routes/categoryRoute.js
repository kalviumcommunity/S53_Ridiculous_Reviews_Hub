const express = require('express')
const router = express.Router()
const Category = require('../Models/category')

router.get('/', async (req,res) => {
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch(err) {
        console.error(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const category1 = await Category.findById(req.params.id)
        res.json(category1)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const categoryinfo = new Category({
        CategoryId: req.body.CategoryId,
        CategoryName: req.body.CategoryName
    })

    try {
        const category1 = await categoryinfo.save()
        res.json(category1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const existingCategory = await Category.findById(req.params.id)
        existingCategory.CategoryName = req.body.Categoryame
        existingCategory.CategoryId = req.body.CategoryId

        const updatedCategory = await existingCategory.save()
        res.json(updatedCategory)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedCategory = await Category.findByIdAndDelete(req.params.id)

        if (!removedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json(removedCategory)
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router