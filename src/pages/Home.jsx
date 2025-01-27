import React from "react";

const Home = () => {
  return (
    <div className="text-customBlack w-full bg-[url('../assets/home-bg-img.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-between rounded-[35px] px-4 py-32 h-[70%] sm:h-[80%] sm:px-8 md:px-20 md:h-[90%]">
      <div>
        <h1 className="text-white font-bold font-krub text-4xl leading-[3rem] max-w-[400px] md:text-6xl md:max-w-[600px] md:leading-[5rem] xl:leading-[8rem] xl:max-w-[800px] xl:text-8xl">
          Your guide to <span className="text-customOrange">Deliciousness</span>
        </h1>
        <p className="font-krub text-customLightGray max-w-[350px] my-8 md:text-xl md:max-w-[500px] xl:text-2xl xl:max-w-[700px]">
          Simplify cooking while unlocking a treasure trove of delicious
          recipes, making meal prep easier and more enjoyable.
        </p>
      </div>
      <div className="flex flex-wrap items-center text-sm gap-4 md:text-xl gap-8">
        <button className="bg-customLightGray rounded-full px-8 py-4 relative text-left min-w-[200px] md:min-w-[300px]">
          Find Recipes
          <div className="flex justify-center items-center w-[2.4rem] h-[2.4rem] bg-customBlack absolute top-[50%] -translate-y-1/2 right-[0.5rem] rounded-full md:w-[3.4rem] h-[3.4rem]">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        <button className="bg-customBlack text-white px-8 py-4 rounded-full min-w-[200px] md:min-w-[300px]">
          Explore Top Picks
        </button>
      </div>
    </div>
  );
};

export default Home;
