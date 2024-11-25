import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, to, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isActive
          ? "bg-white text-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          : "text-gray-300"
      } transition duration-300 ${className}`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
