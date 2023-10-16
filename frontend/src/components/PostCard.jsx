import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";

export default function PostCard({ post }) {
  const [username, setUsername] = useState([]);
  post = post.id;

  return (
    <>
      <h1>Post #: {post.id}</h1>
      <h2>
        User{" "}
        {useEffect(() => {
          async function getUsername() {
            const [user, error] = await getUser(post.user_id);
            const usersUsername = user.username;
            setUsername(usersUsername);
          }
          getUsername();
        }, [setUsername])}
        {username}
      </h2>
      <p>Content: {post.context}</p>
      <p>Timestamp {post.created_at}</p>
    </>
  );
}
