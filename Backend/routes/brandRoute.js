const express = require('express')
const router = express.Router()
const Brand = require('../Models/brand')

router.get('/', async (req,res) => {
    try {
        const brands = await Brand.find({})
        res.json(brands)
    } catch(err) {
        console.error(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const brand1 = await Brand.findById(req.params.id)
        res.json(brand1)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const brandinfo = new Brand({
        BrandId: req.body.BrandId,
        BrandName: req.body.BrandName
    })

    try {
        const brand1 = await brandinfo.save()
        res.json(brand1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const existingBrand = await Brand.findById(req.params.id)
        existingBrand.BrandName = req.body.BrandName
        existingBrand.BrandId = req.body.BrandId

        const updatedBrand = await existingBrand.save()
        res.json(updatedBrand)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedBrand = await Brand.findByIdAndDelete(req.params.id)

        if (!removedBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }

        res.json(removedBrand)
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router