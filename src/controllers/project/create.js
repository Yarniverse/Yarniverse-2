const createProject = async (req, res) => {
    const {
        session,
        db: { Project },
        body: { user_id, project_name, project_description, hook_size }
    } = req;

    // console.log(session.userId); // use this when page is made to see if i can use session.userId instead of user_id

    const project = await Project.create(user_id, project_name, project_description, hook_size);

    res.send(project);

}

module.exports = createProject;