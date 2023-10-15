const Post = require('../models/posts');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('posts').del()
    await Post.create(1, `Does anyone know how to crochet an oval in the round? I've been struggling with it :(`);
    await Post.create(2, `Currently working on trying to crochet the blue sweater from Coraline, wish me luck!`);
    await Post.create(3, `What is your favorite hook size? I think mine might be a 3.5mm, it works for everything!`);
    // {id: 2, colName: 'rowValue2'},
    // {id: 3, colName: 'rowValue3'}
};
