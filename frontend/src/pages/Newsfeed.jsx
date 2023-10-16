import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import PostList from "../components/PostList";
const NewsfeedPage = () => {
  return (
    <>
      <h1>Feed</h1>
      <ul>
        <li>
          <PostList></PostList>
        </li>
      </ul>
    </>
  );
};

export default NewsfeedPage;
