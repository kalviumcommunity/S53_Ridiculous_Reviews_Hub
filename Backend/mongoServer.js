const { MongoClient } = require('mongodb');
require("dotenv").config()

const dbName = 'Ridiculous_Reviews_Hub';

const client = new MongoClient(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log("MongoDB is connected");
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


const getClient = () => client;

module.exports = { connectDB, getClient };
