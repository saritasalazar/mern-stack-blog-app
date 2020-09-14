const router = require('express').Router(),
  mongoose = require('mongoose'),
  Article = require('../../db/models/article');

//Create a new article
router.post('/api/articles', async (req, res) => {
  const article = await new Article({
    ...req.body,
    owner: req.user._id
  });
  try {
    article.save();
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

//Get specific article
router.get('/api/articles/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid article id');

  try {
    const article = await Article.findOne({ _id, owner: req.user._id });
    if (!article) return res.status(404).send();

    res.json(article);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//Get all articles
//articles?limit=10&skip=10
//articles?sortBy=createdAt:asc

router.get('/api/articles', async (req, res) => {
  const match = {},
    sort = {};

  if (req.query.completed) match.completed = req.query.completed === 'true';

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'articles',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.articles);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//Update article

router.patch('/api/articles/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'text', 'dateCreated'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const article = await Article.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!article) return res.status(404).json({ error: 'article not found' });
    updates.forEach((update) => (article[update] = req.body[update]));
    await article.save();
    res.json(article);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

//Delete article

router.delete('/api/articles/:id', async (req, res) => {
  try {
    const article = await Article.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!article) return res.status(404).json({ error: 'article not found' });
    res.json(article);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;
