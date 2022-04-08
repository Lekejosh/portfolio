import React, { useState } from "react";

import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
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
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
            Skils
          </Link>
        </li>
        <li>
          <Link to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="Skills"
              smooth={true}
              duration={500}
            >
              Skils
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="Work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="Contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://github.com/lekejosh"
              target="blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="mailto:lekejosh6wf@gmail.com"
              target="blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://twitter.com/joshuadeleke"
              target="blank"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
