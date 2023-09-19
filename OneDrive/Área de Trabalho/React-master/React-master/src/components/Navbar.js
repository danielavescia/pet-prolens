import "../styles/Navbar.css";
import Login from "./Login";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav id="navbar">
        <Link className="nav-brand" to="/">
          PetProLens
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
        <Login />
      </nav>
    </header>
  );
};

export default Navbar;
