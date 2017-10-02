const Comment = require('../models/comment');

exports.getComments = function(req, res, next) {
  Comment.find()
  .exec(function(err, comments) {
    if(err) {
      res.send(err);
    }
    res.json(comments);
  });
}

exports.createComment = function(req, res, next) {
  let comment = new Comment();
  comment.author = req.body.author;
  comment.text = req.body.text;

  comment.save(function(err) {
    if (err) {
      res.send(req);
    }
    res.json(comment);
  });
}

exports.deleteComments = (req, res, next) => {
  Comment.remove()
  .exec(function(err) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'All comments deleted.'});
  });
}
