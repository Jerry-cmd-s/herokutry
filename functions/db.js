// db.js
const { MongoClient } = require('mongodb');

const password = '8bQQ6H6H5_7SWLH';

const uri = `mongodb+srv://jerrycamijeanbaptiste:${password}@cluster0.q1tyunk.mongodb.net/?retryWrites=true&w=majority`; // Replace with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

module.exports = { client, connectToDB };
