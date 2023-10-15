const createComment = async (req, res) => {
    const {
        db: {Comments},
        params: {post_id},
        body: {user_id, content}
    } = req;

    const comment = await Comments.create(user_id, post_id, content);
    res.send(comment);

}
module.exports = createComment;