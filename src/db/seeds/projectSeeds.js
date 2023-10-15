const Project = require('../models/projects');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) =>  {
  // Deletes ALL existing entries
  await knex('projects').del()
    await Project.create(1, 'project1', 'project1 description', 3);
    await Project.create(1, 'project2', 'project2 description', 5);
    await Project.create(2, 'project1', 'project1 description user 2', 3);
    await Project.create(2, 'project2', 'project2 description user 2', 8);
    // {id: 2, colName: 'rowValue2'},
    // {id: 3, colName: 'rowValue3'}
};
