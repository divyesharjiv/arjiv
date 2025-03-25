import React from "react";

const Heading = ({ children, dark, className = "", ...props }) => {
  return (
    <h2
      className={`${
        dark ? "text-dark" : "text-offwhite"
      } text-xl sm:text-2xl md:text-4xl font-light font-optima tracking-[4px] ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
