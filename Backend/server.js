const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware for error catching
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

mongoose.connect(process.env.mongoURI);

const db = mongoose.connection;

// Check database connection status
app.get('/', (req, res) => {
    res.send(`Database connection status: ${db.readyState === 1 ? 'Connected' : 'Disconnected'}`);
});

// Routes
app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('Hello World');
});

const userRouter = require('./routes/userRoute.js')
app.use('/userRoute', userRouter)

const productRouter = require('./routes/productRoute.js')
app.use('/productRoute', productRouter)

const reviewRouter = require('./routes/reviewRoute.js')
app.use('/reviewRoute', reviewRouter)

const commentRouter = require('./routes/commentRoute.js')
app.use('/commentRoute', commentRouter)

const brandRouter = require('./routes/brandRoute.js')
app.use('/brandRoute', brandRouter)

const categoryRouter = require('./routes/categoryRoute.js')
app.use('/categoryRoute', categoryRouter)





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
