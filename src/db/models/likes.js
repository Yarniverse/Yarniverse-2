const knex = require ('../knex');

class Likes {

    constructor (id, user_id, post_id) {
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
    }

    static async create(user_id, post_id) {
        const query = `INSERT INTO likes (user_id, post_id) VALUES (?,?) RETURNING *`;
        const args = [user_id, post_id];
        const {rows} = await knex.raw(query, args);
        const like = rows[0];
        return new Likes(like);
    };

    static async list(post_id) {
        const query = `SELECT * FROM likes WHERE post_id = ?`;
        const args = [post_id];
        const {rows} = await knex.raw(query, args);
        return rows.map((like) => new Likes(like));
    }

    static async destroy(post_id, user_id) {
        const query = `DELETE FROM likes WHERE post_id = ? AND user_id = ? RETURNING *`;
        const args = [post_id, user_id];
        const {rows} = await knex.raw(query, args);
        const like = rows[0];
        return like;
    };
}

module.exports = Likes;