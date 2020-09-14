const mongoose = require('mongoose');
moment = require('moment');
Comment = require('./comment');

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    text: {
      type: String,
      required: true
    },
    dateCreated: {
      type: Date
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    timestamps: true
  }
);

articleSchema.methods.toJSON = function () {
  const article = this;
  const articleObject = article.toObject();
  if (articleObject.dateCreated) {
    articleObject.dateCreated = moment(articleObject.dateCreated).format(
      'YYYY-MM-DD'
    );
  }
  return articleObject;
};

articleSchema.pre('remove', async function (next) {
  const article = this;
  await Comment.deleteMany({
    articleId: article._id
  });
  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
