const Comments = require('../models/comments');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('comments').del()
  await Comments.create(2, 3, `I'd say my favorite is a 2.5mm, I think its good for making shirts and clothes`);
  await Comments.create(1, 2, `Wishing you luck - it's one of my favorite movies so I hope you're successful!`);
  await Comments.create(1, 2, `Are you working on a pattern for this too? I'd love to try it!`);
};