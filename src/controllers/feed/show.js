const showPost = async (req, res) => {
    const {
        db:{ Feed },
        params: { id },
     } = req;

     const post = await Feed.findById(id);

     if (!post) return res.sendStatus(404);

     res.send(post);
};

module.exports = showPost;