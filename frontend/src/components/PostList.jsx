import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import CreateAPost from "./CreatePost";
import { fetchPosts } from "../utils";
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, [setPosts]);

  const handleOnClick = (e) => {
    const postId = e.currentTarget.getAttribute("data-post-id");
    console.log("Clicked on post with ID:", postId);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Newsfeed</h1>
      <CreateAPost></CreateAPost>
      <ul className="grid grid-cols-2">
        {posts.map((post, i) => (
          <li key={i}>
            <PostCard
              key={post.id}
              post={post}
              onClick={handleOnClick}
            ></PostCard>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
