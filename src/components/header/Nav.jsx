import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex gap-14 text-custom-32 uppercase">
        <li className="hover:font-bold transition-all duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:font-bold transition-all duration-200">
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li className="hover:font-bold transition-all duration-200 ">
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li className="hover:font-bold transition-all duration-200">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
