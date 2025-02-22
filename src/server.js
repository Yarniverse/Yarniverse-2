const express = require('express');
const path = require('path');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const router = require('./router');
const projectRoutes = require('./projectRoutes');
const feedRouter = require('./feedRoutes');
const logRoutes = require('./middleware/log-routes');
const likeRouter = require('./likesRoutes');
const commentRouter = require('./commentRoutes');

const app = express();

app.use(handleCookieSessions);  // adds a session property to each request representing the cookie
app.use(logRoutes);       // print information about each incoming request
app.use(express.json());  // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve static assets from the public folder

app.use('/api', router);
app.use('/api', feedRouter);
app.use('/api', projectRoutes);
app.use('/api', likeRouter);
app.use('/api', commentRouter);

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the public folder.
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


module.exports = app;
