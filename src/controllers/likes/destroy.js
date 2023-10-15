const removeLike = async (req, res) => {
    const {
        db: { Likes },
        body: { user_id},
        params: {post_id}
    } = req;

    const like = await Likes.destroy(post_id, user_id);

    res.send(like);
};

module.exports = removeLike;