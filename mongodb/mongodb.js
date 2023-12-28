// const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb')


// Connection URL
const url = 'mongodb+srv://divyang:Divyang123@cluster0.ibhomni.mongodb.net';
const client = new MongoClient(url);

// Database Name
const dbName = 'e-comm';

// connection
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dbName)
    return db.collection('products')
}

module.exports = dbConnect;