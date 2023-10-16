import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/projects';

export const getUserProjects = async ({user_id}) => {
    const [projects, error] = await fetchHandler(`${baseUrl}/all/${user_id}`);
    console.log(error);
    return projects;
};

export const getSpecificProject = async (id) => {
    fetchHandler(`${baseUrl}/${id}`);
};

export const createProject = async ({user_id, project_name, project_description, hook_size}) => {
    fetchHandler(baseUrl, getPostOptions( user_id, project_name, project_description, hook_size));
};

export const deleteProject = async (id) => {
    fetchHandler(`${baseUrl}/${id}`, deleteOptions);
};

export const editProject = async ({id, project_name, project_description, hook_size}) => {
    fetchHandler(`${baseUrl}/${id}`, getPatchOptions({id, project_name, project_description, hook_size}))
};