import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>This is header and navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/users">Users</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
    </div>
  );
};

export default Header;
