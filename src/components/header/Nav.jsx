import { NavLink } from "react-router-dom";

import "./nav-hover.css";

const Nav = ({ isBurgerMenu, closeMenu }) => {
  return (
    <nav className="flex items-center justify-center">
      <ul
        className={`${
          isBurgerMenu
            ? "flex flex-col gap-8 "
            : "hidden hidden md:flex gap-4 lg:gap-14"
        } text-2xl uppercase`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            onClick={closeMenu}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            onClick={closeMenu}
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
