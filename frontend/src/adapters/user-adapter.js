import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password, email, first_name, last_name }) => (
  fetchHandler(baseUrl, getPostOptions({ username, password, email, first_name, last_name }))
);

export const getAllUsers = async () => {
  const [users, error] = await fetchHandler(baseUrl);
  console.log(error); // just logging errors here for simplicity
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);
