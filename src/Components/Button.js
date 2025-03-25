import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  outline,
  size = "md",
  onClick,
  className = "",
  href,
}) => {
  const baseStyles =
    "relative overflow-hidden transition-all duration-300 ease-in-out rounded focus:outline-none shadow-md";

  const sizeStyles = {
    sm: "px-2 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = outline
    ? "border border-gray-500 text-gray-700 hover:text-white"
    : "bg-primary text-white border border-primary";

  const hoverEffect = `
    before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
    before:bg-gray-300 
    hover:before:translate-x-0 before:transition-transform before:duration-300`;

  const reverseEffect = `
    hover:before:translate-x-0 before:translate-x-[-100%]
    before:transition-transform before:duration-300`;

  const contentStyles = "relative z-10";

  const Btn = href ? Link : "button";

  return (
    <Btn
      {...(href
        ? { to: href, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles} ${hoverEffect} ${reverseEffect} ${className} tracking-wide inline-block`}
    >
      <span className={contentStyles}>{children}</span>
    </Btn>
  );
};

export default Button;
