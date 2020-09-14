require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  userRouter = require('./routes/secure/users'),
  articleRouter = require('./routes/secure/articles'),
  cors = require('cors'),
  app = express();

// Parse incoming JSON into objects
app.use(express.json());
app.use(cors());

// Unauthenticated routes
app.use(openRoutes);

app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(
  passport.authenticate('jwt', {
    session: false
  })
);
//  Authenticated  Routes
app.use(userRouter);
app.use(articleRouter);

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
