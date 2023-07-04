import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="grid px-4 py-20 md:max-w-screen-xl md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="py-4 text-2xl font-semibold text-[#20B486] md:text-3xl">
            START TO SUCCESS
          </p>
          <h1 className="text-[1.7rem] font-semibold md:text-[3rem]">
            Access To <span className="text-[#20B486]">5000+ </span>Courses from
            <span className="text-[#20B486]"> 300</span> Instructors &
            Institutions
          </h1>
          <p className="py-4 text-base text-[#6D737A] md:text-xl">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <form action="">
            <label className="mt-4 flex rounded-lg border-2 p-4 shadow-lg">
              <input
                className="w-full focus:outline-none"
                type="text"
                placeholder="What do you want to learn?"
              />
              <MagnifyingGlassIcon className="text-black-500 h-6 w-6" />
            </label>
          </form>
        </div>
        <div className="order-first md:order-last">
          <img
            className="h-full w-full object-contain"
            fetchpriority="low"
            src={heroImg}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
