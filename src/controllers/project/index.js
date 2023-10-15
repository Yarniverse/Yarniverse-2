// This is called a "barrel file". It's sole purpose is to import values/functions and export them in one object.

const show = require('./show');
const list = require('./list');
const create = require('./create');
const update = require('./update');
const destroy = require('./destroy');


module.exports = {
  show,
  list,
  create,
  destroy,
  update,
};