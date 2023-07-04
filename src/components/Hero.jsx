import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <section className="grid mx-auto max-w-screen-sm md:grid-cols-2 md:max-w-screen-xl px-4 py-20">
      <div className="text-center md:text-left">
        <p className="py-4 text-xl md:text-2xl font-medium text-[#20B486]">
          START TO SUCCESS
        </p>
        <h1 className="text-[1.7rem] md:text-[3.4rem] font-semibold">
          Access To <span className="text-[#20B486]">5000+ </span>Courses from
          <span className="text-[#20B486]"> 300</span> Instructors &
          Institutions
        </h1>
        <p className="py-4 text-base md:text-xl text-[#6D737A]">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <form action="">
          <label className="mt-4 flex rounded-lg border-2 p-4 shadow-lg">
            <input
              className="w-full focus:outline-none"
              type="text"
              placeholder="What do want to learn?"
            />
            <MagnifyingGlassIcon className="text-black-500 h-6 w-6" />
          </label>
        </form>
      </div>
      <div className="">
        <img
          className="object-contain h-full w-full"
          fetchpriority="low"
          src={heroImg}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Hero;
