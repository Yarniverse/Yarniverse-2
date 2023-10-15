const Project = require('../models/projects');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) =>  {
  // Deletes ALL existing entries
  await knex('projects').del()
    await Project.create(1, 'Hello kitty basket', 'trying to create a basket to hold all of my little trinkets and things', 3);
    await Project.create(1, 'Chowder hat', 'I found a pattern for the chowder hat but I want to see if I can try to make it on my own without looking', 5);
    await Project.create(2, 'Coraline sweater', `I'm creating the blue sweater from coraline with the white stars on it. It's my favorite movie ever, so why not - right?`, 3);
    await Project.create(2, 'Fingerless gloves from Coraline', `Attempting to make Coraline's fingerless gloves. It's a lot harder than it looks ): `, 8);
    // {id: 2, colName: 'rowValue2'},
    // {id: 3, colName: 'rowValue3'}
};
