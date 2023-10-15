const User = require('../db/models/user');
const Project = require('../db/models/projects');
const Feed = require('../db/models/posts');
const Likes = require('../db/models/likes');
const Comments = require('../db/models/comments');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Project, 
    Feed,
    Likes,
    Comments,
  };
  next();
};

module.exports = addModelsToRequest;
