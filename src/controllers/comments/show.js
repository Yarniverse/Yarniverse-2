const showComments = async (req, res) => {
    const {
        db: {Comments},
        params: {post_id},
    } = req;

    const comments = await Comments.list(post_id);

    res.send(comments);
}

module.exports = showComments;