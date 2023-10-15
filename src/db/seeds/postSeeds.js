const Post = require('../models/posts');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('posts').del()
    await Post.create(1, 'this is a post from user_id 1');
    await Post.create(2, 'this is a post from user_id 2');
    await Post.create(3, 'this is a post from user_id 3');
    // {id: 2, colName: 'rowValue2'},
    // {id: 3, colName: 'rowValue3'}
};
