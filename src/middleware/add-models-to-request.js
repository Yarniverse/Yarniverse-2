const User = require('../db/models/user');
const Project = require('../db/models/projects');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Project, 
  };
  next();
};

module.exports = addModelsToRequest;
