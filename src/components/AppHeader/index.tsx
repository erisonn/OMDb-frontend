import { NavLink } from "react-router-dom";
import './index.scss'

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <nav>
        <NavLink to={"/"}>MOVIES</NavLink>
        <NavLink to={"/random"}>RANDOM</NavLink>
        <NavLink to={"/search"}>SEARCH</NavLink>
        <NavLink to={"/starred"}>STARRED</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
