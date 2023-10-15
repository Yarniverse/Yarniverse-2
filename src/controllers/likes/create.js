const likePost = async (req, res) => {
    const {
        db: { Likes },
        body: {user_id},
        params: {post_id}
    } = req;

    // if the post doesn't exist return 404 not found? maybe fill out post_id from url? 
    const like = await Likes.create(user_id, post_id);

    res.send(like);
}

module.exports = likePost;