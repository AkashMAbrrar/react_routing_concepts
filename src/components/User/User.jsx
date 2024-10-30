import { Link } from "react-router-dom";

const User = ({ user }) => {
  const userStyle = {
    border: "4px solid purple",
    padding: "8px",
    marginTop: "10px",
    borderRadius: "12px",
  };
  const { name, id, email, phone } = user;
  return (
    <div style={userStyle}>
      <h2>
        User Name: {name} {id}
      </h2>
      <p>Email: {email}</p>
      <p>Phone No. {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default User;
