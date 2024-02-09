const express = require('express')
const router = express.Router()
const Product = require('../Models/product')

router.get('/', async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch(err) {
        console.error(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const product1 = await Product.findById(req.params.id)
        res.json(product1)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const productinfo = new Product({
        ProductId: req.body.ProductId,
        ProductName: req.body.ProductName,
        Brand: req.body.Brand,
        Price: req.body.Price,
        ReleaseDate: req.body.ReleaseDate
    })

    try {
        const product1 = await productinfo.save()
        res.json(product1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const existingProduct = await Product.findById(req.params.id)
        existingProduct.ProductId = req.body.ProductId
        existingProduct.ProductName = req.body.ProductName
        existingProduct.Brand = req.body.Brand
        existingProduct.Price = req.body.Price
        existingProduct.ReleaseDate = req.body.ReleaseDate
        const updatedProduct = await existingProduct.save()
        res.json(updatedProduct)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
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