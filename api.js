const express = require('express');
const router = express.Router();
const generatePassword = require('password-generator');

router.get('/api/passwords', function(req, res) {
  const count = 5;

  const passwords = Array.from(Array(count).keys()).map(i => generatePassword(12, false));

  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

module.exports = router;
