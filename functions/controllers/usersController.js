// usersController.js
const { Router } = require('express');
const router = Router();

router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    const db = req.app.locals.db;
    const collection = db.collection('users');

    const result = await collection.insertOne({ name, email });
    console.log('Document inserted:', result.insertedId);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Failed to insert document:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
