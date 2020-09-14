const router = require('express').Router();
const Comment = require('../../db/models/comment');
const Article = require('../../db/models/article');
const User = require('../../db/models/user');

//Create user
router.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });

    res.json(user);
  } catch (e) {
    res.status(201).status(400).json({ error: e.toString() });
  }
});

//Login user
router.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// Get all comments associated with an article
router.get('/api/comments/:articleId', async (req, res) => {
  try {
    const comment = await Comment.find({ articleId: req.params.articleId });
    res.json(comment);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

router.get('api/users/articles'), async (req, res) => {};

// Get all articles (open route)
router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create comment
router.post('/api/comments', async (req, res) => {
  const comment = await new Comment({
    ...req.body
  });
  try {
    comment.save();
    res.status(201).json(comment);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;
