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
        className="cursor-pointer p-4 hover:bg-gray-100 md:cursor-pointer"
      >
        <a href={item.link}>{item.label}</a>
      </li>
    ));
  };
  return (
    <nav className="border-b-2">
      <div className="m-auto bg-white md:max-w-screen-xl">
        <div className="mx-4 flex items-center justify-between py-6">
          <div className="cursor-pointer">
            <img src="logo.svg" alt="" />
          </div>
          <div>
            <ul className="hidden gap-5 md:flex">{renderMenuItems()}</ul>
          </div>

          <div className="hidden items-center gap-5 md:flex ">
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
          <div className="absolute end-0 start-0 z-10 border-b-2 bg-white px-4 pb-4 md:hidden">
            <ul>
              {renderMenuItems()}
              <li className="mb-4">
                <button className="flex w-full justify-center gap-2 rounded-lg border p-4">
                  <img src={lockIcon} alt="Lock Icon" />
                  Login
                </button>
              </li>
              <li>
                <button className="w-full rounded-lg bg-[#20B486] p-4 text-white">
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
