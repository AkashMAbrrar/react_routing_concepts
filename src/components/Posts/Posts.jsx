import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      <div className="users_container">
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;