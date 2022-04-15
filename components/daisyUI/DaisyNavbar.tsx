import React from "react";
import { BiMenu, BiMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";

export default function DaisyNavbar() {
  return (
    <section className="navbar bg-richorange">
      <div className="navbar-start mx-10 md:mx-20">
        <div className="dropdown">
          <label tabIndex={0} className="">
            <BsFillSunFill size="32" color="white" />
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="font-autobus text-2xl text-customwhite">
          Dashboard
        </h1>
      </div>
      <div className="navbar-end mx-10 md:mx-20">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <BiMenu size="32" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <a>guide</a>
            </li>
            <li>
              <a>log</a>
            </li>
            <li>
              <a>about</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
