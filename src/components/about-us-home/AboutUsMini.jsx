import React from "react";

const AboutUsMini = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-[25px] flex items-center gap-4 p-4">
      <div className="bg-customOrange bg-opacity-40 p-4 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p className="font-bold md:text-xl xl:text-2xl">{title}</p>
    </div>
  );
};

export default AboutUsMini;
