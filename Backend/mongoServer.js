const { MongoClient } = require('mongodb');

const URL = 'mongodb+srv://qnasir575:25Nasir%40%40@cluster0.uq9kwqm.mongodb.net/';
const dbName = 'Ridiculous_Reviews_Hub';

const client = new MongoClient(URL, {
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
        return false;
    }
}


const getClient = () => client;

module.exports = { connectDB, getClient };
