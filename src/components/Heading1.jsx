import React from "react";

const Heading1 = ({
  title,
  highlight,
  position = "end",
  description = "",
  className = "text-center",
}) => {
  const renderTitle = () => {
    if (position === "start") {
      return (
        <>
          <span className="text-customOrange">{highlight}</span>
        </>
      );
    }
    if (position === "middle") {
      const [firstPart, secondPart] = title.split(highlight);
      return (
        <>
          {firstPart}
          <span className="text-customOrange">{highlight}</span>
          {secondPart}
        </>
      );
    }
    return (
      <>
        {title} <span className="text-customOrange">{highlight}</span>
      </>
    );
  };
  return (
    <div>
      <h1 className={`${className} text-4xl font-bold text-center md:text-6xl`}>
        {renderTitle()}
      </h1>
      <p
        className={`${className} text-customDarkGray my-4 md:text-xl xl:text-2xl`}
      >
        {description}
      </p>
    </div>
  );
};

export default Heading1;
