import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./pictures/logo192.png";

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="w-10 m-6" src={logo} alt="" />
            <Link to="/" className="text-white font-bold text-xl">
              React Books
            </Link>
          </div>
          {/* Homepage */}
          <div className="flex">
            <NavLink
              exact
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              Home
            </NavLink>
            {/* All Books page*/}
            <NavLink
              to="/books"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              All Books
            </NavLink>
            {/* Create Book page*/}
            <NavLink
              to="/create"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              New Book
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
