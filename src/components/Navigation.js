import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              My Books DB
            </Link>
          </div>
          <div className="flex">
            <NavLink
              exact
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              All Books
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
