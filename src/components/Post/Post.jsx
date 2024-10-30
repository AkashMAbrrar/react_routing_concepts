import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const postStyle = {
    border: "4px solid purple",
    padding: "8px",
    marginTop: "10px",
    borderRadius: "12px",
  };

  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h3>Post Of Id: {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>{" "}
      </Link>
      <button onClick={handleShowDetail}>Click To See Details</button>
    </div>
  );
};

export default Post;
