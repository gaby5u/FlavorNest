import React from "react";

const WhatWeOffer = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row items-center gap-4 text-sm lg:items-start md:text-xl">
      <div className="bg-white rounded-full w-[55px] h-[55px] p-4">{icon}</div>
      <div>
        <p className="font-bold my-2">{title}</p>
        <p className="text-customDarkGray">{description}</p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
