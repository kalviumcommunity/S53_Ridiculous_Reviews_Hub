const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for error catching
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
app.get('/ping', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
