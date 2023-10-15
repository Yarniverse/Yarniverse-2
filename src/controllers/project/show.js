const showProject = async (req,res) => {
    const {
        db: {Project},
        params: {id},
    }= req;

    const project = await Project.show(id);

    if (!project) return res.sendStatus(404)
    res.send(project);
}
module.exports = showProject;