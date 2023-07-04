import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto grid max-w-screen-xl gap-11 px-4 pb-4 pt-24 md:grid-cols-6">
        <div className="col-span-2">
          <img className="cursor-pointer" src="logo.svg" alt="logo" />
          <div className="mt-6 flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Contact Us</h1>
            <p className="text-base font-normal text-[#6D737A]">
              Call : +123 400 123
            </p>
            <p className="text-base font-normal text-[#6D737A]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </p>
            <p className="text-base font-normal text-[##363A3D]">
              Email: example@mail.com
            </p>
            <div className="flex gap-4">
              <FacebookIcon
                fontSize="large"
                className="cursor-pointer text-[#4DC39E]"
              />
              <LinkedInIcon
                fontSize="large"
                className="cursor-pointer text-[#4DC39E]"
              />
              <InstagramIcon
                fontSize="large"
                className="cursor-pointer text-[#4DC39E]"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Explore</h1>
          <ul className="mt-6 flex flex-col gap-4 text-base font-normal text-[#6D737A]">
            <li>Explore</li>
            <li>About</li>
            <li>Course</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Category</h1>
          <ul className="mt-6 flex flex-col gap-4 text-base font-normal text-[#6D737A]">
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
          <p className="text-base font-normal text-[#6D737A] md:mt-6">
            Lorem Ipsum has been them an industry printer took a galley make
            book.
          </p>
          <form className="my-6 flex flex-col" action="">
            <input
              className="mb-4 rounded-lg bg-gray-100 p-4 shadow-sm focus:outline-[#20B486]"
              type="text"
              placeholder="Email here"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#20B486] px-8 py-3 text-white md:w-fit"
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
