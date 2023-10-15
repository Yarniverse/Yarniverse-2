const updateProject = async (req, res) => {
    const {
        db: { Project },
        body: { project_name, project_description, hook_size},
        params: { id },
    } = req;

    const project = await Project.show(id);
    if (!project) return res.sendStatus(404);

    const updatedProject = await Project.update(id, project_name, project_description, hook_size);

    res.send(updatedProject);
}

module.exports = updateProject;