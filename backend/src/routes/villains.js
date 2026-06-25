const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all villains' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get villain by ID' });
});

module.exports = router;
