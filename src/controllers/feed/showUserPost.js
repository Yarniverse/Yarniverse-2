const userPosts = async (req, res) =>{
    const {
        db: { Feed },
        body: { user_id },
    } = req;

    const posts = await Feed.findByUserId(user_id);
    if(!posts) return res.sendStatus(404);

    res.send(posts);
}

module.exports = userPosts;