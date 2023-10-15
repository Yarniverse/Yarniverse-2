/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");
    table.integer('post_id').references('id').inTable('posts').onDelete("CASCADE");
    table.text('content');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('comments');
};