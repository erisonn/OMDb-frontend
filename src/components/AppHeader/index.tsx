import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Movies</NavLink>
        <NavLink to={"/random"}>Random</NavLink>
        <NavLink to={"/search"}>Search</NavLink>
        <NavLink to={"/starred"}>Starred</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
