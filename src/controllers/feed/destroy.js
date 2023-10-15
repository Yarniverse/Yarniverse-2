const destroyPost = async (req,res)=> { 
    const {
        db: { Feed },
        params: {id},
    } = req;

    const post = await Feed.findById(id);
    if (!post) return res.sendStatus(404);

    const deletePost = await Feed.destroy(id);

    res.send(deletePost);

}

module.exports = destroyPost;