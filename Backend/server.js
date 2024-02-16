const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

// Middleware for error catching
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
app.use(express.json())

mongoose.connect(process.env.mongoURI);

const db = mongoose.connection;

// Check database connection status
app.get('/', (req, res) => {
    res.send(`Database connection status: ${db.readyState === 1 ? 'Connected' : 'Disconnected'}`);
});



app.get('/ping', (req, res) => {
    res.send('Hello World');
});

const productRouter = require('./routes/productRoute.js')
app.use('/productRoute', productRouter)





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
