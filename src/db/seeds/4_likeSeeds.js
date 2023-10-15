const Likes = require('../models/likes');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('likes').del()
  await Likes.create(1, 3);
  await Likes.create(2, 3);
  await Likes.create(3, 3);
};
