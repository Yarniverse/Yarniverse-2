import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(`/api/posts`);
      const resData = await res.json();
      setPosts(resData);
    }
    doFetch();
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
    </>
  );
};

export default PostList;
