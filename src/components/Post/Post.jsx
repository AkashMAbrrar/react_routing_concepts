import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const postStyle = {
    border: "4px solid purple",
    padding: "8px",
    marginTop: "10px",
    borderRadius: "12px",
  };

  return (
    <div style={postStyle}>
      <h3>Post Of Id: {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>{" "}
      </Link>
    </div>
  );
};

export default Post;
