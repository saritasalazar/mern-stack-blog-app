if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../server/db/config');

const User = require('../server/db/models/user'),
  Article = require('../server/db/models/article');

const user = new User({
  name: 'Sara',
  email: 'sarah@sarah.com',
  password: 'remember'
});

user
  .save()
  .then((res) => console.log(res))
  .catch((e) => console.log(e.toString()));

const article = new Article({
  title: 'learn mongoose',
  text: 'Blah, Blah, Blah, some really interesting article',
  dueDate: new Date()
});

article
  .save()
  .then((res) => console.log(res))
  .catch((e) => console.log(e.toString()));
