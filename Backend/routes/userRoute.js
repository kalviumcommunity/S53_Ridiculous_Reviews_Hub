const express = require('express')
const router = express.Router()
const User = require('../Models/user')

router.get('/', async (req,res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err) {
        console.error(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user1 = await User.findById(req.params.id)
        res.json(user1)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    const userinfo = new User({
        UserId: req.body.UserId,
        Username: req.body.Username,
        Email: req.body.Email,
        RegistrationDate: req.body.RegistrationDate
    })

    try {
        const user1 = await userinfo.save()
        res.json(user1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const existingUser = await User.findById(req.params.id)
        existingUser.Username = req.body.Username
        existingUser.Email = req.body.Email
        existingUser.UserId = req.body.UserId
        existingUser.RegistrationDate = req.body.RegistrationDate
        const updatedUser = await existingUser.save()
        res.json(updatedUser)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.findByIdAndDelete(req.params.id)

        if (!removedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(removedUser)
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router