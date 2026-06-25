const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all heroes' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get hero by ID' });
});

router.post('/recruit', (req, res) => {
  res.json({ message: 'Hero recruited successfully' });
});

module.exports = router;
