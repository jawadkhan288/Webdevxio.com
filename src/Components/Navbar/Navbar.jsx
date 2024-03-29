import React from "react";
import navbarIMG from "../../assets/Image/Group 111.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar pt-0 px-20  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="">
          <img src={navbarIMG} alt="" />
        </a>
      </div>
      <div className=" navbar-center hidden lg:flex">
        <ul className="text-2xl menu menu-horizontal px-1">
          <li className="hover:text-blue-600 focus:text-blue-600">
            <NavLink to="/" exact activeClassName="font-bold">
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-600 focus:text-blue-600">
            <NavLink to="/about" activeClassName="font-bold">
              About
            </NavLink>
          </li>
          <li className="hover:text-blue-600 focus:text-blue-600">
            <NavLink to="/service" activeClassName="font-bold">
              Service
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button class="custom-btn btn-6 bg-blue-600">
          <span>Contac US</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
