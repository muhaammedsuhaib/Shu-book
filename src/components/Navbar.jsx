import React, { useState } from "react";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        <div className="text-3xl font-extrabold tracking-wide">
          <NavLink text="ToDoListify" to="/" className="uppercase text-lg" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {!isAuthenticated ? (
            <>
              <NavLink
                text="Login"
                to="/login"
                className="px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300"
              />
              <NavLink
                text="Registration"
                to="/registration"
                className="px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300"
              />
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-gray-300"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {!isAuthenticated ? (
              <>
                <NavLink
                  text="Login"
                  to="/login"
                  className="block px-4 py-2 hover:bg-white hover:text-black rounded-md transition duration-300"
                />
                <NavLink
                  text="Registration"
                  to="/registration"
                  className="block px-4 py-2 hover:bg-white hover:text-black rounded-md transition duration-300"
                />
              </>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-white hover:text-black rounded-md transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
