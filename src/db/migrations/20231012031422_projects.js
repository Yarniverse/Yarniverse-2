/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");
    table.string('project_name');
    table.text('project_description');
    table.integer('hook_size');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('projects');
};