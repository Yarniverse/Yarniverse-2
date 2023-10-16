import { fetchHandler, getPostOptions, getPatchOptions,deleteOptions } from "../utils";

const baseUrl = 'api/posts';

export const getAllPosts = async () => {
    const [posts, error] = await fetchHandler(baseUrl);
    console.log(error);
    return posts;
};

export const getSpecificPost = async (id) => {
    fetchHandler(`${baseUrl}/${id}`);
};

export const createPost = async ({user_id, context}) => {
    fetchHandler(baseUrl, getPostOptions({user_id,context}));
};

export const deletePost = async (id) => {
    fetchHandler(`${baseUrl}/${id}`, deleteOptions);
};

export const editPost = async ({id, context}) => {
    fetchHandler(`${baseUrl}/${id}`, getPatchOptions({id,context}));
};