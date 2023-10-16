import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = 'api/posts';

export const getPostLikes = async ({post_id}) => {
    const [likes, error] = await fetchHandler(`${baseUrl}/${post_id}/like`);
    console.log(error);
    return (likes);
};

export const addLikesToPost = async ({user_id, post_id}) => {
    fetchHandler(`${baseUrl}/${post_id}`, getPostOptions({user_id, post_id}));
};

export const removeLikeFromPost = async () => {}; // this takes in the user_id and the post_id so? idk how to create the delete for this