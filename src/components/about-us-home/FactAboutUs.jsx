import React from "react";

const FactAboutUs = ({ title, description }) => {
  return (
    <div className="text-center">
      <p className="my-4 text-customOrange font-bold">{title}</p>
      <p className="text-customDarkGray">{description}</p>
    </div>
  );
};

export default FactAboutUs;
