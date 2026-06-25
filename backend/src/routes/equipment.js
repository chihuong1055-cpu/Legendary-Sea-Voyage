const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all equipment' });
});

router.get('/:userId/inventory', (req, res) => {
  res.json({ equipment: [] });
});

router.post('/equip', (req, res) => {
  res.json({ message: 'Equipment equipped successfully' });
});

module.exports = router;
