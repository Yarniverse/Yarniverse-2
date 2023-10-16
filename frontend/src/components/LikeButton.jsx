export default function LikeButton() {
  // use create a like function
  // maybe useState to track the likes on a post? Or to track if the user already liked the post
  // code runs with  on click? handleClick method on button
  // liked ? change icon style name, clicked again ? change it again
  return (
    <>
      <button onClick={this.handleClick}>
        <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
        <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
      </button>
    </>
  );
}
