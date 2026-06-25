const express = require('express');
const router = express.Router();

router.post('/start', (req, res) => {
  res.json({ message: 'Battle started', battleId: 'battle_123' });
});

router.post('/:battleId/action', (req, res) => {
  res.json({ message: 'Action executed' });
});

router.get('/:battleId/result', (req, res) => {
  res.json({ winner: 'player', rewards: { gold: 1000 } });
});

module.module.exports = router;
