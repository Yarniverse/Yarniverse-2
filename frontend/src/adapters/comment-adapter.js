import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl= '/api/posts/';

export const getPostComments = async ({post_id}) => {
    const [comments, error] = await fetchHandler(`${baseUrl}/${post_id}/comments`);
    console.log(error);
    return comments;
};

export const createComment = async ({user_id, post_id, content}) => {
    fetchHandler(`${baseUrl}/${post_id}/comments`, getPostOptions(user_id, post_id, content));
};

export const deleteComment = async () => {};