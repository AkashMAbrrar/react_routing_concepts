import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();

  const { id, title, body } = post;

  const navigate = useNavigate();
  console.log(postId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Post Details About:{id}</h2>
      <p>{title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
