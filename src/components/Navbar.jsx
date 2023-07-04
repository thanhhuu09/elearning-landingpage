import React, { useState } from "react";
import lockIcon from "../assets/lock.svg";
import { hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Course", link: "#course" },
    { label: "Blog", link: "#blog" },
    { label: "Contact", link: "#contact" },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <li
        key={index}
        className="md:cursor-pointer p-4 hover:bg-gray-100 cursor-pointer"
      >
        <a href={item.link}>{item.label}</a>
      </li>
    ));
  };
  return (
    <nav>
      <div className="m-auto max-w-screen-sm md:max-w-screen-xl bg-white">
        <div
          className={`flex items-center justify-between py-6 mx-4 ${
            !toggle && "border-b-2"
          }`}
        >
          <div className="cursor-pointer">
            <img src="logo.svg" alt="" />
          </div>
          <div>
            <ul className="hidden md:flex gap-5">{renderMenuItems()}</ul>
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
          <div className="md:hidden bg-white px-4 absolute z-10 start-0 end-0">
            <ul className="border-b-2 pb-4">
              {renderMenuItems()}
              <li className="mb-4">
                <button className="flex gap-2 p-4 w-full justify-center border rounded-lg">
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
      </div>
    </nav>
  );
};

export default Navbar;
