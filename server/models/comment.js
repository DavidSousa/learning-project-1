const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
 author: String,
 text: String,
 date_created: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
