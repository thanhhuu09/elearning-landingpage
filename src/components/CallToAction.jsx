import React from "react";
import { cta } from "../assets";
export const CallToAction = () => {
  return (
    <section className=" bg-[#f0faf7] ">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl m-auto gap-11 py-28 px-4">
        <img src={cta} alt="Call To Action" />
        <div>
          <h1 className="font-semibold text-3xl text-center md:text-left">
            Join <span className="text-[#20B486]">World's largest</span>{" "}
            learning platform today
          </h1>
          <p className="mt-3 mb-12 font-normal text-[#6D737A] text-xl text-center md:text-left">
            Start learning by registering for free
          </p>
          <button className="max-[780px]:w-full rounded-lg bg-[#20B486] px-8 py-3 text-white">
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};
