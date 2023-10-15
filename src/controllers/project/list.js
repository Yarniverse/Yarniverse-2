const listProject = async (req,res) => {
    const {
        db: {Project},
        body: {user_id},
    }= req;

    const project = await Project.list(user_id);

    if (!project) return res.sendStatus(404);
    
    res.send(project);
}
module.exports = listProject;