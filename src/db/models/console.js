const User = require('./user');
const Project = require('./projects');
const Feed = require('./posts');
const Likes = require('./likes');
const Comments = require('./comments');

global.User = User;
global.Project = Project;
global.Feed = Feed;
global.Likes = Likes;
global.Comments = Comments;