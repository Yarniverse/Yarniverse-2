// This is called a "barrel file". It's sole purpose is to import values/functions and export them in one object.

const list = require('./list');
const create = require('./create');
const destroy = require('./destroy');

module.exports = {
  list,
  create,
  destroy, 
  
};
