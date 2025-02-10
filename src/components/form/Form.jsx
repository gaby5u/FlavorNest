import React from "react";
import SimpleButton from "../SimpleButton";

const Form = () => {
  return (
    <form className="w-full min-h-[400px] font-krub bg-customLightGray rounded-[25px] text-customDarkGray p-8 md:p-[87px] md:text-xl xl:text-2xl flex flex-col justify-between">
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-customOrange font-bold">
            Full name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="py-2 px-0 w-full bg-transparent border-b-2 border-customDarkGray transition duration-400 md:text-lg focus:outline-none focus:border-customOrange"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-customOrange font-bold">
            Email Adress
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="py-2 px-0 w-full bg-transparent border-b-2 border-customDarkGray md:text-lg focus:outline-none focus:border-customOrange"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <label htmlFor="comment" className="text-customOrange font-bold">
          Comment
        </label>
        <input
          name="comment"
          id="comment"
          placeholder="Enter your comment..."
          className="py-2 px-0 bg-transparent border-b-2 border-customDarkGray md:text-lg focus:outline-none focus:border-customOrange"
        />
      </div>
      <div className="text-end">
        <SimpleButton
          value="Submit Message"
          className="mt-8 max-w-[250px] md:text-lg"
        />
      </div>
    </form>
  );
};

export default Form;
