const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  res.json({
    token: 'jwt_token_here',
    user: { id: 'user_123', username, email }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  res.json({
    token: 'jwt_token_here',
    user: { id: 'user_123', username: 'player1', email }
  });
});

module.exports = router;
