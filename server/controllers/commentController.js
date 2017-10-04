const Comment = require('../models/comment');

exports.getComments = (req, res) => {
  Comment.find()
    .exec((err, comments) => {
      if (err) {
        res.send(err);
      }
      res.json(comments);
    });
};

exports.createComment = (req, res) => {
  const comment = new Comment();
  comment.author = req.body.author;
  comment.text = req.body.text;

  comment.save((err) => {
    if (err) {
      res.send(req);
    }
    res.json(comment);
  });
};

exports.deleteComments = (req, res) => {
  Comment.remove()
    .exec((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'All comments deleted.' });
    });
};
