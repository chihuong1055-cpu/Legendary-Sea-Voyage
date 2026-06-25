const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  res.json({ userId: req.params.userId, level: 1, gold: 10000 });
});

router.post('/:userId/profile', (req, res) => {
  res.json({ message: 'Profile updated' });
});

router.post('/:userId/server', (req, res) => {
  res.json({ message: 'Server selected' });
});

module.exports = router;
