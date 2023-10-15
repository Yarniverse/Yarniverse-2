const knex = require('../knex');
class Comments {
    constructor(id, user_id, post_id, content){
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.content = content;
    };

    static async create(user_id, post_id, content) {
        const query = `INSERT INTO comments (user_id, post_id, content) VALUES (?, ?, ?) RETURNING *`;
        const args = [user_id, post_id, content];
        const { rows } = await knex.raw(query, args);
        const comment = rows[0];
        return new Comments(comment);
    };

    static async list(post_id) {
        const query = `SELECT * FROM comments WHERE post_id = ?`;
        const args = [post_id];
        const { rows } = await knex.raw(query, args);
        return rows.map((comment) => new Comments(comment));
    };

    static async destroy(id, post_id, user_id){
        const query = `DELETE FROM comments WHERE id = ? AND post_id = ? AND user_id = ? RETURNING *`;
        const args = [id, post_id, user_id];
        const { rows } = await knex.raw(query, args);
        const comment = rows[0];
        return comment;
    };
};

module.exports = Comments;