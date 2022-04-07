import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <a href="#Home">
          <h2 className="text-grey-300 text-xl" style={{ width: "50px" }}>
            LekeJosh
          </h2>
        </a>
      </div>
      {/*Menu*/}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu*/}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>
      {/*Social Icons*/}
      <div className="hidden"> </div>
    </div>
  );
}

export default Navbar;
