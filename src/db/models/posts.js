const knex = require('../knex');
class Feed {
    constructor (id, user_id, context){
        this.id = id;
        this.user_id = user_id;
        this.context = context;
    }

    static async create(user_id, context){
        const query = 'INSERT INTO posts (user_id, context) VALUES (?, ?) RETURNING *';
        const args = [user_id, context];
        const { rows } = await knex.raw(query, args);
        const post = rows[0];

        return new Feed(post);
    };

    static async findById(id){
        const query = 'SELECT * FROM posts WHERE id = ?'; 
        const args = [id];
        const { rows } = await knex.raw(query, args);
        const post = rows[0];
        return post ? new Feed(post) : null;
    };

    static async findByUser(user_id){
        const query = 'SELECT * FROM posts WHERE user_id = ?';
        const args = [user_id];
        const { rows } = await knex.raw(query, args);
        return rows.map((post) => new Feed(post));
    };

    static async list () {
        const query = 'SELECT * FROM posts';
        const { rows } = await knex.raw(query);
        return rows.map((post) => new Feed(post));
    }
    static async destroy(id){
        const selectedPost = await Feed.findById(id);
        if (!selectedPost) return null;

        const deletedPost = await knex.raw('DELETE FROM posts WHERE id = ? RETURNING *', [id]);

        return deletedPost.rows[0];
    };

    static async update(id, context){
        const post = await knex.raw('UPDATE posts SET context = ? WHERE id = ? RETURNING *', [context, id]);
        const postUpdate = post.rows[0];
        return postUpdate ? new Feed(postUpdate) : null;
    };
}
module.exports = Feed;