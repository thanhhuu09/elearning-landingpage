import React from "react";
import {} from "../assets/";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full p-24">
      <div className="grid grid-cols-6 gap-11 max-w-screen-xl mx-auto ">
        <div className="col-span-2">
          <img className="cursor-pointer" src="logo.svg" alt="logo" />
          <div className="mt-6 flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Contact Us</h1>
            <p className="font-normal text-[#6D737A] text-base">
              Call : +123 400 123
            </p>
            <p className="font-normal text-[#6D737A] text-base">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </p>
            <p className="font-normal text-[##363A3D] text-base">
              Email: example@mail.com
            </p>
            <div className="flex gap-4">
              <FaFacebookF className="w-10 h-10 bg-[#E9F8F3] text-[#4DC39E] p-2 rounded-lg cursor-pointer" />
              <FaLinkedinIn className="w-10 h-10 bg-[#E9F8F3] text-[#4DC39E] p-2 rounded-lg  cursor-pointer" />
              <FaDribbble className="w-10 h-10 bg-[#E9F8F3] text-[#4DC39E] p-2 rounded-lg cursor-pointer" />
              <FaInstagram className="w-10 h-10 bg-[#E9F8F3] text-[#4DC39E] p-2 rounded-lg cursor-pointer" />
              <FaDiscord className="w-10 h-10 bg-[#E9F8F3] text-[#4DC39E] p-2 rounded-lg cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Explore</h1>
          <ul className="font-normal text-[#6D737A] text-base mt-6 flex flex-col gap-4">
            <li>Explore</li>
            <li>About</li>
            <li>Course</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Category</h1>
          <ul className="font-normal text-[#6D737A] text-base mt-6 flex flex-col gap-4">
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Photography</li>
            <li>Music</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-medium">Subscribe</h1>
          <p className="font-normal text-[#6D737A] text-base mt-6">
            Lorem Ipsum has been them an industry printer took a galley make
            book.
          </p>
          <form className="flex flex-col my-6" action="">
            <input
              className="p-4 mb-4 focus:outline-[#20B486] rounded-lg bg-gray-100 shadow-sm"
              type="text"
              placeholder="Email here"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#20B486] px-8 py-3 text-white w-fit"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
