const deleteComment = async (req, res) => {
    const {
        db: {Comments},
        params: {post_id, id},
        body: {user_id},
    } = req;
    console.log(req.params);
    console.log(req.body);

    const comment = await Comments.destroy(id, post_id, user_id);

    res.send(comment);
}

module.exports = deleteComment;