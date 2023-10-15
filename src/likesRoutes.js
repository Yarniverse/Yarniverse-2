const express = require('express');
const likeController = require('./controllers/likes');
const addModelsToRequest = require('./middleware/add-models-to-request');


const LikeRouter = express.Router();
LikeRouter.use(addModelsToRequest);

LikeRouter.get('/posts/:post_id/like', likeController.list);
LikeRouter.post('/posts/:post_id/like', likeController.create);
LikeRouter.delete('/posts/:post_id/like', likeController.destroy);


module.exports = LikeRouter;