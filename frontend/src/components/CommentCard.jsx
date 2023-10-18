import { useState, useEffect } from "react";
import { getUser } from "../adapters/user-adapter";
import ClickLikeButton from "./LikeButton";
export default function CommentCard({ comment }) {
  const [username, setUsername] = useState([]);
  console.log(comment);
  return (
    <>
      <div style={{ border: "1px solid red" }}>
        <h2>{comment.username}</h2>
        {comment.content}
      </div>
    </>
  );
}
