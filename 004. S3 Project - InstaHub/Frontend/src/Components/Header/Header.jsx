import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>InstaHub</h1>
      <div className="header-right">
        <nav>
          <NavLink to={"/"}>
            <span className="material-symbols-outlined">home</span>
            HOME
          </NavLink>
          <NavLink to={"/new/post"}>
            <span className="material-symbols-outlined">add_circle</span>POST
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
