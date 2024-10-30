import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  // state --> data
  // state --> loader
  // use effect
  // fetching data --> set state -> set state
  console.log(users);

  return (
    <div>
      <h2>Our honorable Users: {users.length}</h2>
      <p>All the users here loaded</p>
      <div className="users_container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
