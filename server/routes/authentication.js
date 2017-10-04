const express = require('express');
const passport = require('passport');

const router = express.Router();
const authenticationController = require('../controllers/authenticationController');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

router.post('/api/login', requireLogin, authenticationController.login);

router.post('/api/register', authenticationController.register);

router.get('/home', requireAuth, (req, res) => {
  res.send('Worked!');
});

module.exports = router;
