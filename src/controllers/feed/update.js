const updatePost = async (req,res)=> { 
    const {
        db: { Feed },
        body: {context},
        params: {id},
    } = req;

    const post = await Feed.findById(id);
    if (!post) return res.sendStatus(404);

    const updatedPost = await Feed.update(id, context);

    res.send(updatedPost);

}

module.exports = updatePost;
