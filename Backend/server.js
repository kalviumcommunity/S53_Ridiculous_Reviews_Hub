const express = require('express');
const db = require('./mongoServer.js')
const app = express();
const port = process.env.PORT || 3000;

// Middleware for error catching
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// Routes
app.get('/', (req,res) => {
    // Connect to mongoDB
    db.connectDB().then(result => {
        res.send(`Mongo Connected : ${result}`)
    }).catch(err=> {
        res.send(`Mongo not Connected : ${err}`)
    })
})

app.get('/ping', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
