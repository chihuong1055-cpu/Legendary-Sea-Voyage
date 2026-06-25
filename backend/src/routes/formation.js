const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  res.json({ frontRow: [], backRow: [] });
});

router.post('/:userId/update', (req, res) => {
  res.json({ message: 'Formation updated successfully' });
});

module.exports = router;
