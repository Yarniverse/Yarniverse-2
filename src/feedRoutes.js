const express = require('express');
const feedController = require('./controllers/feed');
const addModelsToRequest = require('./middleware/add-models-to-request');


const FeedRouter = express.Router();
FeedRouter.use(addModelsToRequest);

FeedRouter.get('/posts', feedController.list); // get all posts

FeedRouter.get('/posts/:id', feedController.show); // get posts by id

FeedRouter.post('/posts', feedController.create); // create new post

FeedRouter.delete('/posts/:id', feedController.destroy); // delete a post

FeedRouter.patch('/posts/:id/', feedController.update); // edit a post

module.exports = FeedRouter;