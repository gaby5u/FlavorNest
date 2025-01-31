import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-krub bg-customBlack text-white rounded-[35px] my-4 px-4 pt-16 pb-8 sm:px-8 sm:my-8 md:px-20">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-8">
        <div>
          <NavLink
            to="/"
            className="uppercase text-4xl font-bold md:text-6xl xl:text-8xl"
          >
            Flavor<span className="text-customOrange">Nest</span>
          </NavLink>
          <p className="text-customLightGray my-4 max-w-full md:max-w-[800px] md:text-xl xl:text-2xl">
            Ready to start cooking? Browse our recipe collection today and
            discover new, delicious ways to enjoy food.
          </p>
        </div>
        <ul className="flex items-center justify-end md:text-xl font-bold gap-4 my-2 sm:my-4 md:flex-col md:gap-8 lg:flex-row xl:text-2xl">
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col-reverse gap-4 text-customDarkGray mt-16 md:flex-row items-center justify-between">
        <p className="my-4">&#169;FlavorNest. All Rights Reserved</p>
        <div className="flex items-center justify-end gap-4 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Enter your email..."
            className="bg-transparent border-b-2 border-customDarkGray w-full py-2 md:max-w-[400px]"
          />
          <button className="bg-customOrange text-white py-2 px-4 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
