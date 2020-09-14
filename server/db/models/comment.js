const mongoose = require('mongoose');
Article = require('./article');

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Anonymous',
      trim: true
    },
    comment: {
      type: String,
      required: true
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article'
    }
  },
  {
    timestamps: true
  }
);

commentSchema.methods.toJSON = function () {
  const comment = this;
  const commentObject = comment.toObject();
  return commentObject;
};
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
