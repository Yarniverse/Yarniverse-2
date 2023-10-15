const knex = require('../knex');

class Project {

    constructor(id, project_name, project_description, hook_size){
        this.id = id;
        this.name = project_name;
        this.description = project_description;
        this.hook_size = hook_size;
    }

    static async create(user_id, project_name, project_description, hook_size){
        const query = `INSERT INTO projects (user_id, project_name, project_description, hook_size) VALUES (?, ?, ?, ?) RETURNING *`;
        const args = [user_id, project_name, project_description, hook_size];
        const { rows } = await knex.raw(query, args);
        const project = rows[0];

        return new Project(project);
    }

    static async show(id){
        const query = `SELECT * FROM projects WHERE id = ?`;
        const args = [id];
        const { rows } = await knex.raw(query, args);
        const project = rows[0];
        return project ? new Project(project) : null;
    }

    static async list(user_id){
        const query = `SELECT * FROM projects WHERE user_id = ?`;
        const args = [user_id];
        const { rows } = await knex.raw(query, args);
        return rows.map((project) => new Project(project));
    };

    static async destroy (id){
        const selectedProject = await Project.show(id);
        if (!selectedProject) return null;

        const deletedProject = await knex.raw(`DELETE FROM projects WHERE id = ? RETURNING *`, [id]);

        return deletedProject.rows[0];
    };

    static async update(id, project_name, project_description, hook_size){
        const project = await knex.raw(`UPDATE projects SET project_name = ?, project_description = ?, hook_size = ? WHERE id = ? RETURNING *`, [project_name, project_description, hook_size, id]);
        const projectUpdate = project.rows[0];
        return projectUpdate ? new Project(projectUpdate) : null;

    }
}

module.exports = Project;