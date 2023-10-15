const express = require('express');
const commentController = require('./controllers/comments');
const addModelsToRequest = require('./middleware/add-models-to-request');


const CommentRouter = express.Router();
CommentRouter.use(addModelsToRequest);

CommentRouter.get('/posts/:post_id/comments', commentController.show); // get comments on post

CommentRouter.post('/posts/:post_id/comments', commentController.create); // create new comment on post

CommentRouter.delete('/posts/:post_id/comments/:id', commentController.destroy); // delete a comment on post

module.exports = CommentRouter;