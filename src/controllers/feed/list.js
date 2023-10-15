const listAllPosts = async (req, res) => {
    const {
        db: { Feed },
    } = req;

    const posts = await Feed.list();
    res.send(posts);
}

module.exports = listAllPosts;