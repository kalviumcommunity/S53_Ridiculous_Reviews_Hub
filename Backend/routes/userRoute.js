const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const  UserModel  = require("../Models/user"); 

const router = express.Router();

//Route for posting a new user
router.post("/register", async (req, res) => {
    const userData = req.body;

    const user = {
        username: req.body.username,
        password: req.body.password,
    };

    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ username: user.username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(user.password, 10)

        // Create a new user
        const newUser = await UserModel.create({
                username: user.username,
                password: hashedPassword
            });
        res.json({ message: "User Registered Successfully" })
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    const loginData = req.body;

    const user = {
        username: req.body.username,
        password: req.body.password
    }

    try {
        const validUser = await UserModel.findOne({ username: loginData.username })
        if(!validUser) {
            return res.status(401).json({ message: "User does not exist" })
        }

        const isPasswordValid = await bcrypt.compare(loginData.password, validUser.password)

        if (!isPasswordValid) {
            return res.json({ message: "Username or Password Is Incorrect" })
        }

        const token = jwt.sign({id: validUser._id }, "secret");

        res.json({ token, userId: validUser._id, username: user.username });

    } catch (error) {
        console.error("error logging user:", error)
        res.status(500).json({ message: "Internal server error" });
    }

});

module.exports = router