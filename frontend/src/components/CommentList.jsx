import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  console.log(postId);

  //   useEffect(() => {
  //     async function doFetch() {
  //       const res = await `/api/posts/${Number(postId)}/comments`;
  //       //   const resData = await res.json();
  //       console.log(res);
  //       setComments(res);
  //     }
  //     doFetch();
  //   }, [setComments]);
  //   console.log(comments);
  //   return (
  //     <>
  //       <div>
  //         <ul>
  //           {comments.map((comment, i) => (
  //             <li key={i}>
  //               <CommentCard key={comment.id} project={comment}></CommentCard>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </>
  //   );
}
