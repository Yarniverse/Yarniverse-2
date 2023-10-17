import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function LikeButton() {
  const [isClick, setClick] = useState(false);

  // useEffect(() => {
  //   const ClickLike = async () => {};
  //   //fetch call here
  //   // return boolean value once fetch call is complete - sp  if like !== null then liked = true;
  // }, [setLike]);

  // console.log(like);

  const handleClick = async (e) => {
    e.preventDefault();
    setClick(!isClick);
  };

  const getIcon = () => {
    return isClick ? solidHeart : regularHeart;
  };

  const getStyle = () => {
    return isClick ? { color: "red" } : {};
  };

  return (
    <>
      <FontAwesomeIcon
        icon={getIcon()}
        style={getStyle()}
        onClick={handleClick}
      />
    </>
  );
}
