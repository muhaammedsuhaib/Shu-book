import React from 'react';

const Button = ({ type, text, className }) => {
  return (
    <button
      type={type}
      className={`w-full py-2 font-semibold rounded-md focus:outline-none focus:ring-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
