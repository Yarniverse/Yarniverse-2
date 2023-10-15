const User = require('../db/models/user');
const Project = require('../db/models/projects');
const Feed = require('../db/models/posts');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Project, 
    Feed
  };
  next();
};

module.exports = addModelsToRequest;
