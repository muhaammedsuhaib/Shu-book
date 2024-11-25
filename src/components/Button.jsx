import React from "react";

const Button = ({
  type = "button",
  text,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`w-full py-2 font-semibold rounded-md focus:outline-none focus:ring-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
