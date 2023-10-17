import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import CreateAPost from "./CreatePost";
import { fetchPosts } from "../utils";
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, [setPosts]);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <PostCard key={post.id} post={post}></PostCard>
          </li>
        ))}
      </ul>
      <CreateAPost></CreateAPost>
    </>
  );
};

export default PostList;
