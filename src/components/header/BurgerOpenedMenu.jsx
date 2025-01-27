import React from "react";
import Nav from "./Nav";

const BurgerOpenedMenu = ({ closeMenu }) => {
  return (
    <div className="absolute h-screen right-0 top-16 py-16 px-16 bg-customBlack text-white rounded-l-xl">
      <Nav isBurgerMenu={true} closeMenu={closeMenu} />
    </div>
  );
};

export default BurgerOpenedMenu;
