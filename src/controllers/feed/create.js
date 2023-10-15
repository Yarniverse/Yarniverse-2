const createPost = async (req, res) => {

    const {
        db: {Feed},
        body: { user_id, context }
    } = req;

    const post = await Feed.create(user_id, context);
    res.send(post);
}

module.exports = createPost;