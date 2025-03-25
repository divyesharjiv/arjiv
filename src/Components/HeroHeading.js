import React, { useState } from "react";
import defaultBg from "Assets/Image/Common/polishing.jpeg";

const HeroHeading = ({ img, title }) => {
  const [background, setBackground] = useState(img || defaultBg);

  const handleImageError = () => {
    setBackground(defaultBg);
  };

  return (
    <section
      className="grading-area bg-no-repeat bg-center bg-cover relative h-[50vh]"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <img
        src={img}
        onError={handleImageError}
        className="hidden"
        alt="Arjiv Exports"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="container mx-auto text-center h-full flex flex-col justify-center z-10 relative">
        <div>
          <h1 className="uppercase text-offwhite font-mont font-medium sm:text-4xl lg:text-5xl text-2xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroHeading;
