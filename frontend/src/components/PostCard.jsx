import { useState, useEffect } from "react";
import { getUser } from "../adapters/user-adapter";
import ClickLikeButton from "./LikeButton";
import CommentList from "./CommentList";

export default function PostCard({ post, onClick }) {
  const [username, setUsername] = useState([]);
  post = post.id;

  return (
    <>
      <div>
        <div class="bg-[#6aa096] text-white rounded-lg w-2/3  p-10 mb-10">
          <div class="flex space-x-4 items-center ">
            <div class="w-12 h-12">
              <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-slate-800 dark:text-gray-300">
                  {username[0]}
                </span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex space-x-2 items-center">
                <h2 class="text-base">
                  {" "}
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
                <svg
                  class="h-4 w-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div class="  text-xs text-slate-800">posted an update</div>
              </div>
            </div>
          </div>
          {/* <!--content--> */}
          <div>
            <p class="text-sm leading-6 text-slate-800">{post.context}</p>
          </div>
          <ClickLikeButton postId={post.id}></ClickLikeButton>
        </div>
      </div>
    </>
  );
}
