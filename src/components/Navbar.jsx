import React, { useState } from "react";
import lockIcon from "../assets/lock.svg";
import { hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="m-auto max-w-screen-sm md:max-w-screen-xl px-4 bg-white">
      <div className="flex items-center justify-between md:border-b-2 py-6">
        <div className="cursor-pointer">
          <img src="logo.svg" alt="" />
        </div>
        <div>
          <ul className="hidden md:flex gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Course</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-5 ">
          <button className="flex gap-2">
            <img src={lockIcon} alt="" />
            Login
          </button>
          <button className="rounded-lg bg-[#20B486] px-8 py-3 text-white">
            Sign up for Free
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="Hamburger Menu" />
        </div>
      </div>
      {toggle && (
        <div className="md:hidden bg-white border-b-2 py-6">
          <ul className="">
            <li className="p-4 cursor-pointer hover:bg-gray-100">Home</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">About</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Course</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Blog</li>
            <li className="p-4 cursor-pointer hover:bg-gray-100">Contact</li>
            <li>
              <button className="flex gap-2 p-4 w-full justify-center border rounded-lg my-3">
                <img src={lockIcon} alt="Lock Icon" />
                Login
              </button>
            </li>
            <li>
              <button className="rounded-lg bg-[#20B486] p-4 text-white w-full">
                Sign up for Free
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
