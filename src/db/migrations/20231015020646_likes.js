/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('likes', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");
    table.integer('post_id').references('id').inTable('posts').onDelete("CASCADE");
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('likes');
};