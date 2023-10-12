const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
    await User.create('JohnDoe', '1234', 'man@email.com', 'John', 'Doe');
    await User.create('l33t-guy', '1234', 'leetcode@gmail.com', 'Leet', 'Code');
    await User.create('Jeminem', '1234', 'jeminem@gmail.com', 'Jeminem', 'Lewis');
    await User.create('PaulBlart45', '1234', 'mallcop@gmail.com', 'Paul', 'Blart');
};
