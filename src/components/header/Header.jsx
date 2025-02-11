import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Nav from "./Nav";
import BurgerOpenedMenu from "./BurgerOpenedMenu";

import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import "../../styles/buttons-hover.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [user] = useAuthState(auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const signIngWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 px-4 font-jaldi fixed top-0 left-0 w-full z-[100] bg-white md:px-10">
      <h1 className="text-2xl uppercase lg:text-4xl">
        <Link to="/" className="font-bold">
          Flavor<span className="text-customOrange">Nest</span>
        </Link>
      </h1>
      <Nav />
      <div className="gap-1 flex items-center lg:gap-4">
        <button
          className={`search-btn bg-customLightGray rounded-full p-2 md:p-3`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0474 22.0465L17.9777 17.9767M17.3963 9.25582C17.3963 10.3247 17.1857 11.3831 16.7767 12.3707C16.3676 13.3582 15.7681 14.2555 15.0122 15.0113C14.2564 15.7672 13.3591 16.3667 12.3716 16.7758C11.3841 17.1848 10.3256 17.3954 9.25672 17.3954C8.18782 17.3954 7.12939 17.1848 6.14186 16.7758C5.15432 16.3667 4.25703 15.7672 3.5012 15.0113C2.74538 14.2555 2.14582 13.3582 1.73677 12.3707C1.32772 11.3831 1.11719 10.3247 1.11719 9.25582C1.11719 7.09708 1.97474 5.02675 3.5012 3.50029C5.02766 1.97384 7.09798 1.11628 9.25672 1.11628C11.4155 1.11628 13.4858 1.97384 15.0122 3.50029C16.5387 5.02675 17.3963 7.09708 17.3963 9.25582Z"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          onClick={signIngWithGoogle}
          className={`login-btn rounded-full bg-customBlack bg-cover bg-center ${
            user ? "p-4 md:p-5" : "p-2 md:p-3"
          }`}
          style={{
            backgroundImage: user ? `url(${user.photoURL})` : "none",
          }}
        >
          <svg
            className={`${user ? "hidden" : "flex"}`}
            width="16"
            height="16"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00024 0.5C10.1763 0.49964 11.3216 0.876291 12.2679 1.57467C13.2142 2.27305 13.9117 3.25638 14.258 4.38032C14.6044 5.50427 14.5813 6.70964 14.1922 7.81952C13.8032 8.92939 13.0686 9.88532 12.0962 10.547C13.7839 11.166 15.2477 12.2759 16.2992 13.7339C17.3506 15.1919 17.9417 16.9312 17.9962 18.728C18.0013 18.8277 17.9865 18.9275 17.9525 19.0214C17.9185 19.1153 17.8662 19.2015 17.7984 19.2749C17.7307 19.3483 17.649 19.4074 17.5582 19.4488C17.4673 19.4902 17.369 19.513 17.2692 19.516C17.1694 19.5189 17.07 19.5019 16.9769 19.4659C16.8837 19.4299 16.7987 19.3756 16.7268 19.3063C16.6549 19.237 16.5975 19.1541 16.5581 19.0623C16.5187 18.9706 16.498 18.8719 16.4972 18.772C16.4377 16.8235 15.6218 14.9747 14.2224 13.6174C12.8231 12.2602 10.9502 11.5011 9.00074 11.5011C7.05129 11.5011 5.17844 12.2602 3.77907 13.6174C2.3797 14.9747 1.56379 16.8235 1.50424 18.772C1.49828 18.9709 1.41354 19.1593 1.26866 19.2957C1.12379 19.4322 0.930656 19.5055 0.731744 19.4995C0.532832 19.4935 0.344437 19.4088 0.208004 19.2639C0.0715715 19.119 -0.00172331 18.9259 0.00424406 18.727C0.0589922 16.9304 0.650139 15.1913 1.7016 13.7335C2.75307 12.2757 4.21674 11.1659 5.90424 10.547C4.93193 9.88532 4.19732 8.92939 3.80825 7.81952C3.41917 6.70964 3.39611 5.50427 3.74245 4.38032C4.0888 3.25638 4.78631 2.27305 5.7326 1.57467C6.6789 0.876291 7.82414 0.49964 9.00024 0.5ZM5.00024 6C5.00024 7.06087 5.42167 8.07828 6.17182 8.82843C6.92196 9.57857 7.93938 10 9.00024 10C10.0611 10 11.0785 9.57857 11.8287 8.82843C12.5788 8.07828 13.0002 7.06087 13.0002 6C13.0002 4.93913 12.5788 3.92172 11.8287 3.17157C11.0785 2.42143 10.0611 2 9.00024 2C7.93938 2 6.92196 2.42143 6.17182 3.17157C5.42167 3.92172 5.00024 4.93913 5.00024 6Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          className={`logout-btn rounded-full bg-customBlack ${
            user ? "flex p-2 md:p-3" : "hidden"
          }`}
          onClick={logout}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="128" height="128" fill="url(#pattern0_2_6)" />
            <defs>
              <pattern
                id="pattern0_2_6"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_2_6" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_2_6"
                width="128"
                height="128"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </button>
        <button onClick={toggleMenu} className="block md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isOpen && <BurgerOpenedMenu closeMenu={closeMenu} />}
      </div>
    </div>
  );
};

export default Header;
