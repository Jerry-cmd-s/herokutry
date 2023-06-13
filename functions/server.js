// server.js
const express = require('express');
const { client, connectToDB } = require('./db');

const app = express();

const usersController = require('./controllers/usersController');

app.use(express.json());
app.use('/api', usersController); // Mount the usersController at the '/api' base path

connectToDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});