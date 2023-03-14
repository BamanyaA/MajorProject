const express = require('express');
const router = express.Router();

// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { read, update } = require('../controllers/user');

router.get('/user/:id', requireSignin, read);
router.put('/user/update', requireSignin, update);
// routes/user.js
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'All fields are required'
    });
  }

  const user = new user({ name, email, password });
  user.save((err, user) => {
    if (err) {
      console.log('SIGNUP ERROR', err);
      return res.status(400).json({
        error: 'Failed to signup'
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
});


module.exports = router;
