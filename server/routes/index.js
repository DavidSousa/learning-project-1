const express = require('express');
const generatePassword = require('password-generator');

const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/api/passwords', (req, res) => {
  const count = 5;

  const passwords = Array.from(Array(count).keys()).map(() => generatePassword(12, false));

  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

router.get('/api/comments', commentController.getComments);

router.post('/api/comments', commentController.createComment);

router.delete('/api/comments', commentController.deleteComments);

module.exports = router;
