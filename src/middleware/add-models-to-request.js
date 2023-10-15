const User = require('../db/models/user');
const Project = require('../db/models/projects');
const Feed = require('../db/models/posts');
const Likes = require('../db/models/likes');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Project, 
    Feed,
    Likes,
  };
  next();
};

module.exports = addModelsToRequest;
