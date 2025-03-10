import WhatWeOffer from "../components/introduction-home/WhatWeOffer";
import FavRecipe from "../components/FavRecipe";

import aboutImg from "../assets/img-1.jpg";
import "../styles/buttons-hover.css";

import Heading1 from "../components/Heading1";
import AboutUsMini from "../components/about-us-home/AboutUsMini";
import FactAboutUs from "../components/about-us-home/FactAboutUs";
import Slider from "../components/popular-recipe/Slider";
import Loading from "../components/loading/Loading";

import getRecipes from "../api/useRecipes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const bestRecipes = getRecipes("Side");
  const navigate = useNavigate();

  return (
    <>
      {bestRecipes.isLoading ? (
        <Loading />
      ) : (
        <div className="text-customBlack">
          <div className="w-full bg-[url('../assets/home-bg-img.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-between rounded-[35px] mt-16 px-4 py-32 h-[70%] sm:h-[80%] sm:px-8 md:px-20 md:h-[94%]">
            <div>
              <h1 className="text-white font-bold font-krub text-4xl leading-[3rem] max-w-[400px] md:text-6xl md:max-w-[600px] md:leading-[5rem] xl:leading-[8rem] xl:max-w-[800px] xl:text-8xl">
                Your guide to
                <span className="text-customOrange"> Deliciousness</span>
              </h1>
              <p className="font-krub text-customLightGray max-w-[350px] my-8 md:text-xl md:max-w-[500px] xl:text-2xl xl:max-w-[700px]">
                Simplify cooking while unlocking a treasure trove of delicious
                recipes, making meal prep easier and more enjoyable.
              </p>
            </div>
            <div className="flex flex-wrap items-center text-sm gap-4 md:text-xl gap-8">
              <button
                onClick={() => navigate("/recipes")}
                className="home-1-cta-btn bg-customLightGray rounded-full px-8 py-4 relative text-left min-w-[200px] md:min-w-[300px]"
              >
                <span>Find Recipes</span>
                <div className="flex justify-center items-center w-[2.4rem] h-[2.4rem] bg-customBlack absolute top-[50%] -translate-y-1/2 right-[0.2rem] rounded-full md:w-[3.4rem] md:h-[3.4rem]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 14.584H5.75C5.74992 14.4381 5.70732 14.2955 5.62739 14.1734C5.54746 14.0514 5.43369 13.9553 5.3 13.897L5 14.584ZM19 14.584L18.7 13.897C18.5663 13.9553 18.4525 14.0514 18.3726 14.1734C18.2927 14.2955 18.2501 14.4381 18.25 14.584H19ZM15.75 7C15.75 7.19891 15.829 7.38968 15.9697 7.53033C16.1103 7.67098 16.3011 7.75 16.5 7.75C16.6989 7.75 16.8897 7.67098 17.0303 7.53033C17.171 7.38968 17.25 7.19891 17.25 7H15.75ZM6.75 7C6.75 7.19891 6.82902 7.38968 6.96967 7.53033C7.11032 7.67098 7.30109 7.75 7.5 7.75C7.69891 7.75 7.88968 7.67098 8.03033 7.53033C8.17098 7.38968 8.25 7.19891 8.25 7H6.75ZM7 4.25C5.47501 4.25 4.01247 4.8558 2.93414 5.93414C1.8558 7.01247 1.25 8.47501 1.25 10H2.75C2.75 8.87283 3.19777 7.79183 3.9948 6.9948C4.79183 6.19777 5.87283 5.75 7 5.75V4.25ZM17 5.75C18.1272 5.75 19.2082 6.19777 20.0052 6.9948C20.8022 7.79183 21.25 8.87283 21.25 10H22.75C22.75 8.47501 22.1442 7.01247 21.0659 5.93414C19.9875 4.8558 18.525 4.25 17 4.25V5.75ZM15 21.25H9V22.75H15V21.25ZM9 21.25C8.036 21.25 7.388 21.248 6.905 21.183C6.444 21.121 6.246 21.014 6.116 20.883L5.056 21.945C5.511 22.4 6.078 22.585 6.706 22.67C7.312 22.752 8.078 22.75 9 22.75V21.25ZM4.25 18C4.25 18.922 4.248 19.688 4.33 20.294C4.414 20.922 4.6 21.489 5.055 21.944L6.116 20.884C5.986 20.754 5.879 20.556 5.816 20.094C5.752 19.612 5.75 18.964 5.75 18H4.25ZM18.25 18C18.25 18.964 18.248 19.612 18.183 20.095C18.121 20.556 18.014 20.754 17.883 20.884L18.945 21.944C19.4 21.489 19.585 20.922 19.67 20.294C19.752 19.688 19.75 18.922 19.75 18H18.25ZM15 22.75C15.922 22.75 16.688 22.752 17.294 22.67C17.922 22.586 18.49 22.4 18.945 21.944L17.884 20.884C17.754 21.014 17.556 21.121 17.094 21.184C16.612 21.248 15.964 21.25 15 21.25V22.75ZM7 5.75C7.21333 5.75 7.42267 5.76533 7.628 5.796L7.847 4.312C7.56649 4.27135 7.28344 4.25063 7 4.25V5.75ZM12 1.25C10.9027 1.2497 9.83289 1.59323 8.94091 2.23231C8.04892 2.87139 7.3796 3.7739 7.027 4.813L8.447 5.295C8.6989 4.55264 9.17712 3.9079 9.81442 3.4514C10.4517 2.9949 11.2161 2.74961 12 2.75V1.25ZM7.027 4.813C6.84398 5.35664 6.75043 5.92638 6.75 6.5H8.25C8.25 6.077 8.32 5.672 8.448 5.295L7.027 4.813ZM17 4.25C16.7127 4.25 16.4303 4.27067 16.153 4.312L16.373 5.796C16.5805 5.76424 16.7901 5.74886 17 5.75V4.25ZM12 2.75C12.7838 2.74982 13.5479 2.99521 14.185 3.45169C14.8221 3.90818 15.3002 4.55281 15.552 5.295L16.972 4.813C16.6195 3.77406 15.9503 2.87167 15.0585 2.2326C14.1667 1.59354 13.0971 1.24991 12 1.25V2.75ZM15.552 5.295C15.68 5.672 15.75 6.077 15.75 6.5H17.25C17.25 5.911 17.152 5.344 16.972 4.813L15.552 5.295ZM5.75 18V14.584H4.25V18H5.75ZM5.3 13.897C4.5418 13.5661 3.89666 13.0211 3.4437 12.3289C2.99074 11.6366 2.74965 10.8273 2.75 10H1.25C1.2498 11.119 1.57611 12.2137 2.18892 13.15C2.80174 14.0863 3.67442 14.8234 4.7 15.271L5.3 13.897ZM18.25 14.584V18H19.75V14.584H18.25ZM21.25 10C21.2504 10.8273 21.0093 11.6366 20.5563 12.3289C20.1033 13.0211 19.4582 13.5661 18.7 13.897L19.3 15.271C20.3256 14.8234 21.1983 14.0863 21.8111 13.15C22.4239 12.2137 22.7502 11.119 22.75 10H21.25ZM15.75 6.5V7H17.25V6.5H15.75ZM6.75 6.5V7H8.25V6.5H6.75Z"
                      fill="white"
                    />
                    <path
                      d="M5 18H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <a href="#slider">
                <button className="home-2-cta-btn relative bg-customBlack text-white px-8 py-4 rounded-full min-w-[200px] md:min-w-[300px]">
                  Explore Top Picks
                </button>
              </a>
            </div>
          </div>
          <div className="font-krub flex flex-col jusitfy-center bg-customLightGray rounded-[35px] gap-8 mt-4 px-4 py-4 sm:px-8 py-4 lg:flex-row md:px-16 py-8 xl:gap-16">
            <WhatWeOffer
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 2.5C13.1763 2.49964 14.3216 2.87629 15.2679 3.57467C16.2142 4.27305 16.9117 5.25638 17.258 6.38032C17.6044 7.50427 17.5813 8.70964 17.1922 9.81952C16.8032 10.9294 16.0686 11.8853 15.0962 12.547C16.7839 13.166 18.2477 14.2759 19.2992 15.7339C20.3506 17.1919 20.9417 18.9312 20.9962 20.728C21.0013 20.8277 20.9865 20.9275 20.9525 21.0214C20.9185 21.1153 20.8662 21.2015 20.7984 21.2749C20.7307 21.3483 20.649 21.4074 20.5582 21.4488C20.4673 21.4902 20.369 21.513 20.2692 21.516C20.1694 21.5189 20.07 21.5019 19.9769 21.4659C19.8837 21.4299 19.7987 21.3756 19.7268 21.3063C19.6549 21.237 19.5975 21.1541 19.5581 21.0623C19.5187 20.9706 19.498 20.8719 19.4972 20.772C19.4377 18.8235 18.6218 16.9747 17.2224 15.6174C15.8231 14.2602 13.9502 13.5011 12.0007 13.5011C10.0513 13.5011 8.17844 14.2602 6.77907 15.6174C5.3797 16.9747 4.56379 18.8235 4.50424 20.772C4.49828 20.9709 4.41354 21.1593 4.26866 21.2957C4.12379 21.4322 3.93066 21.5055 3.73174 21.4995C3.53283 21.4935 3.34444 21.4088 3.208 21.2639C3.07157 21.119 2.99828 20.9259 3.00424 20.727C3.05899 18.9304 3.65014 17.1913 4.7016 15.7335C5.75307 14.2757 7.21674 13.1659 8.90424 12.547C7.93193 11.8853 7.19732 10.9294 6.80825 9.81952C6.41917 8.70964 6.39611 7.50427 6.74245 6.38032C7.0888 5.25638 7.78631 4.27305 8.7326 3.57467C9.6789 2.87629 10.8241 2.49964 12.0002 2.5ZM8.00024 8C8.00024 9.06087 8.42167 10.0783 9.17182 10.8284C9.92196 11.5786 10.9394 12 12.0002 12C13.0611 12 14.0785 11.5786 14.8287 10.8284C15.5788 10.0783 16.0002 9.06087 16.0002 8C16.0002 6.93913 15.5788 5.92172 14.8287 5.17157C14.0785 4.42143 13.0611 4 12.0002 4C10.9394 4 9.92196 4.42143 9.17182 5.17157C8.42167 5.92172 8.00024 6.93913 8.00024 8Z"
                    fill="#212121"
                  />
                </svg>
              }
              title="Find Recipes"
              description="Every feature is tailored to make your cooking journey effortless and enjoyable"
            />
            <WhatWeOffer
              icon={
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 3.5625V0.5625C8.25 0.413316 8.30927 0.270242 8.41475 0.164752C8.52024 0.0592632 8.66332 0 8.8125 0C8.96169 0 9.10476 0.0592632 9.21025 0.164752C9.31574 0.270242 9.375 0.413316 9.375 0.5625V3.5625C9.375 3.71168 9.31574 3.85476 9.21025 3.96025C9.10476 4.06574 8.96169 4.125 8.8125 4.125C8.66332 4.125 8.52024 4.06574 8.41475 3.96025C8.30927 3.85476 8.25 3.71168 8.25 3.5625ZM11.8125 4.125C11.9617 4.125 12.1048 4.06574 12.2102 3.96025C12.3157 3.85476 12.375 3.71168 12.375 3.5625V0.5625C12.375 0.413316 12.3157 0.270242 12.2102 0.164752C12.1048 0.0592632 11.9617 0 11.8125 0C11.6633 0 11.5202 0.0592632 11.4148 0.164752C11.3093 0.270242 11.25 0.413316 11.25 0.5625V3.5625C11.25 3.71168 11.3093 3.85476 11.4148 3.96025C11.5202 4.06574 11.6633 4.125 11.8125 4.125ZM14.8125 4.125C14.9617 4.125 15.1048 4.06574 15.2102 3.96025C15.3157 3.85476 15.375 3.71168 15.375 3.5625V0.5625C15.375 0.413316 15.3157 0.270242 15.2102 0.164752C15.1048 0.0592632 14.9617 0 14.8125 0C14.6633 0 14.5202 0.0592632 14.4148 0.164752C14.3093 0.270242 14.25 0.413316 14.25 0.5625V3.5625C14.25 3.71168 14.3093 3.85476 14.4148 3.96025C14.5202 4.06574 14.6633 4.125 14.8125 4.125ZM23.4 8.5125L20.625 10.5938V16.3125C20.625 17.0584 20.3287 17.7738 19.8012 18.3012C19.2738 18.8287 18.5584 19.125 17.8125 19.125H5.8125C5.06658 19.125 4.35121 18.8287 3.82376 18.3012C3.29632 17.7738 3 17.0584 3 16.3125V10.5938L0.225002 8.5125C0.105655 8.42299 0.0267535 8.28973 0.00565571 8.14205C-0.0154421 7.99436 0.0229917 7.84435 0.112502 7.725C0.202013 7.60565 0.335268 7.52675 0.482953 7.50565C0.630638 7.48456 0.780655 7.52299 0.900002 7.6125L3 9.1875V6.5625C3 6.41332 3.05926 6.27024 3.16475 6.16475C3.27024 6.05926 3.41332 6 3.5625 6H20.0625C20.2117 6 20.3548 6.05926 20.4602 6.16475C20.5657 6.27024 20.625 6.41332 20.625 6.5625V9.1875L22.725 7.6125C22.8443 7.52299 22.9944 7.48456 23.142 7.50565C23.2897 7.52675 23.423 7.60565 23.5125 7.725C23.602 7.84435 23.6404 7.99436 23.6193 8.14205C23.5982 8.28973 23.5194 8.42299 23.4 8.5125ZM19.5 7.125H4.125V16.3125C4.125 16.7601 4.30279 17.1893 4.61926 17.5057C4.93573 17.8222 5.36495 18 5.8125 18H17.8125C18.2601 18 18.6893 17.8222 19.0057 17.5057C19.3222 17.1893 19.5 16.7601 19.5 16.3125V7.125Z"
                    fill="black"
                  />
                </svg>
              }
              title="Diverse Recipes"
              description="From traditional dishes to modern twists, find recipes that suit your cravings"
            />
            <WhatWeOffer
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_23_134)">
                    <path
                      d="M11.9997 1.5C10.0548 1.5 8.18956 2.27262 6.81429 3.64788C5.43902 5.02315 4.66641 6.88841 4.66641 8.83333C4.65524 9.89911 4.88304 10.9538 5.33307 11.92C5.55567 12.3315 5.8051 12.7279 6.07974 13.1067C6.61378 13.8225 7.06133 14.599 7.41307 15.42C7.65503 16.289 7.78717 17.1848 7.80641 18.0867H9.13974C9.11904 17.0283 8.95991 15.9771 8.66641 14.96C8.28138 14.0319 7.78436 13.1542 7.18641 12.3467C6.94471 12.0175 6.72213 11.6747 6.51974 11.32C6.16155 10.5361 5.98385 9.68174 5.99974 8.82C5.99974 7.22251 6.63434 5.69045 7.76393 4.56086C8.89353 3.43127 10.4256 2.79667 12.0231 2.79667C13.6206 2.79667 15.1526 3.43127 16.2822 4.56086C17.4118 5.69045 18.0464 7.22251 18.0464 8.82C18.0476 9.69033 17.8516 10.5496 17.4731 11.3333C17.2707 11.688 17.0481 12.0308 16.8064 12.36C16.2117 13.1637 15.717 14.0368 15.3331 14.96C15.0384 15.9814 14.8793 17.0371 14.8597 18.1H16.1931C16.2123 17.1982 16.3444 16.3023 16.5864 15.4333C16.9381 14.6124 17.3857 13.8359 17.9197 13.12C18.1954 12.7326 18.4448 12.3273 18.6664 11.9067C19.1164 10.9405 19.3442 9.88577 19.3331 8.82C19.3295 6.87739 18.5554 5.01555 17.1805 3.64317C15.8056 2.27078 13.9424 1.5 11.9997 1.5Z"
                      fill="black"
                    />
                    <path
                      d="M12.4193 10.34C12.3194 10.2402 12.1839 10.1842 12.0427 10.1842C11.9015 10.1842 11.766 10.2402 11.666 10.34L9.66602 12.34L11.5727 14.4266V18.12H12.666V14L11.1727 12.3666L12.4327 11.1066C12.4832 11.056 12.5231 10.9957 12.5499 10.9294C12.5767 10.863 12.5898 10.792 12.5886 10.7205C12.5873 10.6489 12.5717 10.5784 12.5426 10.513C12.5136 10.4476 12.4716 10.3888 12.4193 10.34Z"
                      fill="black"
                    />
                    <path
                      d="M15.9057 19.4333H8.0724C7.93095 19.4333 7.79529 19.4895 7.69527 19.5896C7.59525 19.6896 7.53906 19.8252 7.53906 19.9667C7.53906 20.1081 7.59525 20.2438 7.69527 20.3438C7.79529 20.4438 7.93095 20.5 8.0724 20.5H15.9057C16.0472 20.5 16.1828 20.4438 16.2829 20.3438C16.3829 20.2438 16.4391 20.1081 16.4391 19.9667C16.4391 19.8252 16.3829 19.6896 16.2829 19.5896C16.1828 19.4895 16.0472 19.4333 15.9057 19.4333Z"
                      fill="black"
                    />
                    <path
                      d="M14.6674 21.4333H9.33411C9.19267 21.4333 9.05701 21.4895 8.95699 21.5896C8.85697 21.6896 8.80078 21.8252 8.80078 21.9667C8.80078 22.1081 8.85697 22.2438 8.95699 22.3438C9.05701 22.4438 9.19267 22.5 9.33411 22.5H14.6674C14.8089 22.5 14.9446 22.4438 15.0446 22.3438C15.1446 22.2438 15.2008 22.1081 15.2008 21.9667C15.2008 21.8252 15.1446 21.6896 15.0446 21.5896C14.9446 21.4895 14.8089 21.4333 14.6674 21.4333Z"
                      fill="black"
                    />
                    <path
                      d="M11.546 7.25997L9.726 9.07997C9.63407 9.18142 9.58468 9.31434 9.58805 9.45121C9.59142 9.58807 9.64729 9.71839 9.7441 9.8152C9.84091 9.91201 9.97123 9.96788 10.1081 9.97125C10.245 9.97462 10.3779 9.92523 10.4793 9.8333L12.2993 7.99997C12.3529 7.95146 12.396 7.89258 12.4261 7.82689C12.4562 7.76121 12.4726 7.6901 12.4744 7.61787C12.4762 7.54565 12.4633 7.47381 12.4364 7.40673C12.4096 7.33964 12.3694 7.27871 12.3183 7.22762C12.2673 7.17653 12.2063 7.13636 12.1392 7.10953C12.0722 7.08271 12.0003 7.06979 11.9281 7.07157C11.8559 7.07335 11.7848 7.08979 11.7191 7.11988C11.6534 7.14997 11.5945 7.1931 11.546 7.24664V7.25997Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_23_134">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              title="Inspiration for All"
              description="Unleash your inner chef with recipes crafted for every skill level"
            />
          </div>
          <div className="font-krub my-12 sm:my-8 xl:my-16">
            <Heading1
              title="Our Best"
              highlight="Recipes"
              description="Here's what's popular on cooking right now"
            />
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {bestRecipes.recipes.slice(0, 12).map((bestRecipe, index) => (
                <FavRecipe key={index} recipe={bestRecipe} />
              ))}
            </div>
          </div>
          <div className="bg-[url('../assets/about-img.png')] bg-center bg-cover bg-no-repeat w-full rounded-[35px] px-4 py-16 sm:px-8 md:px-20">
            <Heading1
              className="text-start max-w-[500px]"
              title="About Our Culinary Stories"
              position="middle"
              highlight="Culinary"
            />
          </div>
          <div className="font-krub flex flex-wrap-reverse items-start justify-between gap-4 my-4 sm:my-8 gap-8 custom1400px:flex-nowrap xl:items-stretch">
            <img
              src={aboutImg}
              alt="food"
              className="rounded-[35px] object-cover w-full max-h-[250px] custom1400px:max-h-full 2xl:max-w-[500px]"
            />
            <div>
              <Heading1
                className="text-start"
                title="We believe in the transformative power of cooking and good food"
                description="Whether you're a beginner looking for simple meal ideas or an experienced chef eager to try new recipes, we are here to inspire your culinary journey."
                highlight="transformative"
                position="middle"
              />
              <div className="flex flex-col items-stretch justify-between gap-4 w-full md:gap-8 md:flex-row">
                <div className="flex flex-col gap-4 justify-center bg-customLightGray rounded-[35px] p-4 w-full 2xl:w-1/2">
                  <AboutUsMini
                    icon={
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_26_318)">
                          <path
                            d="M26.5398 18.0001C26.5354 16.6555 26.3913 15.3149 26.1098 14.0001H29.7098C29.5253 13.4513 29.3014 12.9166 29.0398 12.4001H25.6898C25.0604 10.296 24.0836 8.31199 22.7998 6.5301C21.9797 6.1853 21.1247 5.93048 20.2498 5.7701C22.0089 7.65876 23.3362 9.90739 24.1398 12.3601H18.7498V5.6001H17.2498V12.3701H11.8598C12.665 9.91294 13.9958 7.66072 15.7598 5.7701C14.8886 5.92795 14.037 6.17941 13.2198 6.5201C11.9309 8.29452 10.9474 10.2717 10.3098 12.3701H6.93977C6.67337 12.896 6.44609 13.4408 6.25977 14.0001H9.88977C9.6082 15.3149 9.46409 16.6555 9.45977 18.0001C9.46278 19.4709 9.63049 20.9367 9.95977 22.3701H6.41977C6.62551 22.9311 6.87286 23.4759 7.15977 24.0001H10.3898C11.0017 25.916 11.9093 27.7245 13.0798 29.3601C13.9178 29.7194 14.7932 29.9843 15.6898 30.1501C14.0575 28.37 12.8023 26.278 11.9998 24.0001H17.2598V30.3401H18.7598V24.0001H23.9998C23.1943 26.2789 21.9357 28.3709 20.2998 30.1501C21.2006 29.9786 22.0794 29.7069 22.9198 29.3401C24.0884 27.7106 24.9959 25.909 25.6098 24.0001H28.8098C29.0953 23.4856 29.3427 22.9509 29.5498 22.4001H25.9998C26.3447 20.9584 26.5259 19.4824 26.5398 18.0001ZM17.2498 22.3701H11.5098C10.8061 19.6179 10.7753 16.7368 11.4198 13.9701H17.2498V22.3701ZM24.4898 22.3701H18.7498V14.0001H24.5798C24.8671 15.3138 25.008 16.6553 24.9998 18.0001C25.0091 19.4721 24.8378 20.9398 24.4898 22.3701Z"
                            fill="#FF9F0E"
                          />
                          <path
                            d="M18 2C14.8355 2 11.7421 2.93838 9.11088 4.69649C6.4797 6.45459 4.42894 8.95345 3.21793 11.8771C2.00693 14.8007 1.69008 18.0177 2.30744 21.1214C2.92481 24.2251 4.44866 27.0761 6.6863 29.3137C8.92394 31.5513 11.7749 33.0752 14.8786 33.6926C17.9823 34.3099 21.1993 33.9931 24.1229 32.7821C27.0466 31.5711 29.5454 29.5203 31.3035 26.8891C33.0616 24.2579 34 21.1645 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM18 32C15.2311 32 12.5243 31.1789 10.222 29.6406C7.91974 28.1022 6.12532 25.9157 5.06569 23.3576C4.00607 20.7994 3.72882 17.9845 4.26901 15.2687C4.80921 12.553 6.14258 10.0584 8.10051 8.1005C10.0584 6.14257 12.553 4.8092 15.2687 4.26901C17.9845 3.72881 20.7994 4.00606 23.3576 5.06569C25.9157 6.12531 28.1022 7.91973 29.6406 10.222C31.1789 12.5243 32 15.2311 32 18C32 21.713 30.525 25.274 27.8995 27.8995C25.274 30.525 21.713 32 18 32Z"
                            fill="#FF9F0E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_318">
                            <rect width="36" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    title="Diverse Recipes"
                  />
                  <AboutUsMini
                    icon={
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 28.5V7.5V24.3525V21.3075V28.5ZM8.424 30C7.733 30 7.1565 29.769 6.6945 29.307C6.2325 28.845 6.001 28.268 6 27.576V8.424C6 7.733 6.2315 7.1565 6.6945 6.6945C7.1575 6.2325 7.734 6.001 8.424 6H27.5775C28.2675 6 28.844 6.2315 29.307 6.6945C29.77 7.1575 30.001 7.734 30 8.424V20.3655H28.5V8.424C28.5 8.193 28.404 7.981 28.212 7.788C28.02 7.595 27.808 7.499 27.576 7.5H8.424C8.193 7.5 7.981 7.596 7.788 7.788C7.595 7.98 7.499 8.192 7.5 8.424V27.5775C7.5 27.8075 7.596 28.019 7.788 28.212C7.98 28.405 8.1915 28.501 8.4225 28.5H17.943V30H8.424ZM25.881 31.5L21.768 27.4155L22.8375 26.3535L25.881 29.397L31.9665 23.3115L33.0285 24.381L25.881 31.5ZM12.174 19.155C12.502 19.155 12.7765 19.0445 12.9975 18.8235C13.2175 18.6035 13.3275 18.329 13.3275 18C13.3275 17.671 13.2175 17.3965 12.9975 17.1765C12.7775 16.9565 12.5025 16.8465 12.1725 16.8465C11.8425 16.8465 11.568 16.9565 11.349 17.1765C11.13 17.3965 11.02 17.671 11.019 18C11.018 18.329 11.128 18.6035 11.349 18.8235C11.57 19.0435 11.845 19.1535 12.174 19.1535M12.174 13.5C12.502 13.5 12.7765 13.39 12.9975 13.17C13.2175 12.95 13.3275 12.675 13.3275 12.345C13.3275 12.015 13.2175 11.741 12.9975 11.523C12.7775 11.305 12.5025 11.195 12.1725 11.193C11.8425 11.191 11.568 11.301 11.349 11.523C11.13 11.745 11.02 12.0195 11.019 12.3465C11.018 12.6735 11.128 12.948 11.349 13.17C11.57 13.392 11.845 13.502 12.174 13.5ZM16.788 18.75H24.8655V17.25H16.788V18.75ZM16.788 13.095H24.8655V11.595H16.788V13.095Z"
                          fill="#FF9F0E"
                        />
                      </svg>
                    }
                    title="Simple Instructions"
                  />
                  <AboutUsMini
                    icon={
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_26_324)">
                          <path
                            d="M18.0006 2.25C15.0832 2.25 12.2853 3.40893 10.2224 5.47183C8.15951 7.53473 7.00059 10.3326 7.00059 13.25C6.98384 14.8487 7.32554 16.4308 8.00059 17.88C8.33448 18.4973 8.70862 19.0919 9.12059 19.66C9.92165 20.7338 10.593 21.8986 11.1206 23.13C11.4835 24.4335 11.6817 25.7773 11.7106 27.13H13.7106C13.6795 25.5424 13.4408 23.9657 13.0006 22.44C12.423 21.0478 11.6775 19.7314 10.7806 18.52C10.418 18.0262 10.0842 17.5121 9.78059 16.98C9.2433 15.8041 8.97675 14.5226 9.00059 13.23C9.00059 10.8338 9.95249 8.53568 11.6469 6.84129C13.3413 5.1469 15.6394 4.195 18.0356 4.195C20.4318 4.195 22.7299 5.1469 24.4243 6.84129C26.1187 8.53568 27.0706 10.8338 27.0706 13.23C27.0724 14.5355 26.7784 15.8244 26.2106 17C25.907 17.5321 25.5731 18.0462 25.2106 18.54C24.3186 19.7456 23.5765 21.0552 23.0006 22.44C22.5586 23.9721 22.3199 25.5557 22.2906 27.15H24.2906C24.3194 25.7973 24.5176 24.4535 24.8806 23.15C25.4082 21.9186 26.0795 20.7538 26.8806 19.68C27.2941 19.099 27.6682 18.491 28.0006 17.86C28.6756 16.4108 29.0173 14.8287 29.0006 13.23C28.9953 10.3161 27.834 7.52333 25.7717 5.46475C23.7094 3.40617 20.9145 2.25 18.0006 2.25Z"
                            fill="#FF9F0E"
                          />
                          <path
                            d="M18.63 15.51C18.48 15.3604 18.2768 15.2764 18.065 15.2764C17.8532 15.2764 17.65 15.3604 17.5 15.51L14.5 18.51L17.36 21.64V27.18H19V21L16.76 18.55L18.65 16.66C18.7258 16.5841 18.7856 16.4937 18.8258 16.3941C18.866 16.2946 18.8857 16.1881 18.8838 16.0808C18.882 15.9735 18.8585 15.8676 18.8149 15.7696C18.7713 15.6715 18.7084 15.5832 18.63 15.51Z"
                            fill="#FF9F0E"
                          />
                          <path
                            d="M23.8605 29.1499H12.1105C11.8984 29.1499 11.6949 29.2342 11.5449 29.3842C11.3948 29.5342 11.3105 29.7377 11.3105 29.9499C11.3105 30.1621 11.3948 30.3656 11.5449 30.5156C11.6949 30.6656 11.8984 30.7499 12.1105 30.7499H23.8605C24.0727 30.7499 24.2762 30.6656 24.4262 30.5156C24.5763 30.3656 24.6605 30.1621 24.6605 29.9499C24.6605 29.7377 24.5763 29.5342 24.4262 29.3842C24.2762 29.2342 24.0727 29.1499 23.8605 29.1499Z"
                            fill="#FF9F0E"
                          />
                          <path
                            d="M21.9992 32.1499H13.9992C13.787 32.1499 13.5836 32.2342 13.4335 32.3842C13.2835 32.5342 13.1992 32.7377 13.1992 32.9499C13.1992 33.1621 13.2835 33.3656 13.4335 33.5156C13.5836 33.6656 13.787 33.7499 13.9992 33.7499H21.9992C22.2114 33.7499 22.4149 33.6656 22.5649 33.5156C22.7149 33.3656 22.7992 33.1621 22.7992 32.9499C22.7992 32.7377 22.7149 32.5342 22.5649 32.3842C22.4149 32.2342 22.2114 32.1499 21.9992 32.1499Z"
                            fill="#FF9F0E"
                          />
                          <path
                            d="M17.32 10.89L14.59 13.62C14.4521 13.7722 14.378 13.9716 14.3831 14.1769C14.3881 14.3822 14.4719 14.5777 14.6171 14.7229C14.7623 14.8681 14.9578 14.9519 15.1631 14.9569C15.3684 14.962 15.5678 14.8879 15.72 14.75L18.45 12C18.5303 11.9272 18.595 11.8389 18.6401 11.7404C18.6853 11.6419 18.7099 11.5352 18.7126 11.4269C18.7152 11.3185 18.6959 11.2108 18.6556 11.1102C18.6154 11.0095 18.5551 10.9181 18.4785 10.8415C18.4019 10.7649 18.3105 10.7046 18.2098 10.6644C18.1092 10.6241 18.0015 10.6048 17.8931 10.6074C17.7848 10.6101 17.6781 10.6347 17.5796 10.6799C17.4811 10.725 17.3927 10.7897 17.32 10.87V10.89Z"
                            fill="#FF9F0E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_26_324">
                            <rect width="36" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    title="Meal Inspiration"
                  />
                  <AboutUsMini
                    icon={
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.0001 3.95825C20.8622 3.95768 22.6755 4.55405 24.1738 5.65981C25.6721 6.76558 26.7765 8.32251 27.3249 10.1021C27.8733 11.8817 27.8368 13.7902 27.2207 15.5475C26.6047 17.3048 25.4416 18.8183 23.9021 19.866C26.5742 20.8461 28.8918 22.6035 30.5567 24.912C32.2215 27.2204 33.1574 29.9744 33.2437 32.8193C33.2518 32.9772 33.2283 33.1351 33.1745 33.2838C33.1207 33.4325 33.0378 33.5689 32.9305 33.6851C32.8233 33.8013 32.694 33.895 32.5501 33.9605C32.4062 34.0261 32.2507 34.0622 32.0926 34.0669C31.9346 34.0715 31.7772 34.0445 31.6297 33.9875C31.4822 33.9305 31.3476 33.8447 31.2337 33.7349C31.1199 33.6252 31.0291 33.4939 30.9667 33.3486C30.9043 33.2033 30.8715 33.047 30.8703 32.8889C30.776 29.8037 29.4842 26.8765 27.2685 24.7275C25.0528 22.5785 22.0875 21.3767 19.0009 21.3767C15.9142 21.3767 12.9489 22.5785 10.7332 24.7275C8.51754 26.8765 7.22568 29.8037 7.13139 32.8889C7.12195 33.2039 6.98777 33.5022 6.75839 33.7182C6.52901 33.9342 6.22321 34.0502 5.90827 34.0408C5.59332 34.0313 5.29503 33.8972 5.07901 33.6678C4.863 33.4384 4.74695 33.1326 4.75639 32.8177C4.84308 29.9731 5.77906 27.2195 7.44388 24.9113C9.1087 22.6031 11.4262 20.846 14.0981 19.866C12.5586 18.8183 11.3954 17.3048 10.7794 15.5475C10.1634 13.7902 10.1268 11.8817 10.6752 10.1021C11.2236 8.32251 12.328 6.76558 13.8263 5.65981C15.3246 4.55405 17.1379 3.95768 19.0001 3.95825ZM12.6667 12.6666C12.6667 14.3463 13.334 15.9572 14.5217 17.1449C15.7094 18.3327 17.3204 18.9999 19.0001 18.9999C20.6798 18.9999 22.2907 18.3327 23.4784 17.1449C24.6661 15.9572 25.3334 14.3463 25.3334 12.6666C25.3334 10.9869 24.6661 9.37597 23.4784 8.18824C22.2907 7.00051 20.6798 6.33325 19.0001 6.33325C17.3204 6.33325 15.7094 7.00051 14.5217 8.18824C13.334 9.37597 12.6667 10.9869 12.6667 12.6666Z"
                          fill="#FF9F0E"
                        />
                      </svg>
                    }
                    title="Personalized Experience"
                  />
                </div>
                <div className="bg-customOrange rounded-[35px] text-white font-bold w-full px-8 py-8 md:text-xl p-16 xl:text-2xl 2xl:w-1/2">
                  <svg
                    width="82"
                    height="82"
                    viewBox="0 0 82 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6586 59.18C12.1394 55.4422 10.25 51.2499 10.25 44.4542C10.25 32.4958 18.6447 21.7778 30.8525 16.4785L33.9036 21.1867C22.509 27.3504 20.2813 35.3488 19.393 40.3918C21.2278 39.4419 23.6297 39.1105 25.9838 39.3292C32.1474 39.8998 37.0059 44.9599 37.0059 51.2499C37.0059 54.4215 35.746 57.4631 33.5034 59.7058C31.2608 61.9484 28.2191 63.2083 25.0476 63.2083C23.2936 63.1931 21.5602 62.8292 19.9483 62.1376C18.3364 61.446 16.8782 60.4406 15.6586 59.18ZM49.8253 59.18C46.3061 55.4422 44.4167 51.2499 44.4167 44.4542C44.4167 32.4958 52.8114 21.7778 65.0192 16.4785L68.0703 21.1867C56.6757 27.3504 54.448 35.3488 53.5597 40.3918C55.3944 39.4419 57.7963 39.1105 60.1504 39.3292C66.3141 39.8998 71.1726 44.9599 71.1726 51.2499C71.1726 54.4215 69.9127 57.4631 67.6701 59.7058C65.4274 61.9484 62.3858 63.2083 59.2142 63.2083C57.4603 63.1931 55.7269 62.8292 54.115 62.1376C52.5031 61.446 51.0448 60.4406 49.8253 59.18Z"
                      fill="white"
                    />
                  </svg>
                  <p className="my-2 md:my-8">
                    Cooking is like painting or writing a song. Just as there
                    are only so many notes or colors, there are only so many
                    flavors—it's how you combine them that sets you apart.
                  </p>
                  <p className="text-end">— Wolfgang Puck</p>
                </div>
              </div>
            </div>
          </div>
          <div className="font-krub flex flex-col items-center justify-between bg-customLightGray rounded-[35px] gap-4 my-4 p-4 sm:my-8 px-8 sm:flex-row sm:items-start md:text-xl md:px-20 py-8 xl:text-2xl">
            <FactAboutUs title="500+" description="Registered Users" />
            <FactAboutUs title="300+" description="Recipes" />
            <FactAboutUs title="85%" description="User Satisfaction Rate" />
            <FactAboutUs
              title="1000+"
              description="Officialy Published Recipes"
            />
          </div>
          <div
            id="slider"
            className="font-krub px-2 my-2 sm:my-4 md:px-20 xl:my-8"
          >
            <Heading1
              title="Popular Seafood Recipes Today"
              highlight="Seafood"
              position="middle"
              className="text-start"
            />
            <Slider />
          </div>
          <div className="font-krub relative bg-[url('../assets/chicken-gyoza.jpg')] bg-center bg-no-repeat bg-cover w-full rounded-[35px] px-4 pt-32 pb-8 sm:px-8 md:px-20 md:pt-64 lg:pt-96">
            <div className="absolute inset-0 bg-black/40 rounded-[35px]"></div>
            <Heading1
              title="Make Cooking Much Easier with Our Recipes"
              className="relative text-white text-start max-w-[700px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
