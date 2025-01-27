import { NavLink } from "react-router-dom";

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
        <li className="hover:font-bold transition-all duration-200">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="hover:font-bold transition-all duration-200">
          <NavLink to="/recipes" onClick={closeMenu}>
            Recipes
          </NavLink>
        </li>
        <li className="hover:font-bold transition-all duration-200 ">
          <NavLink to="/favorites" onClick={closeMenu}>
            Favorites
          </NavLink>
        </li>
        <li className="hover:font-bold transition-all duration-200">
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
