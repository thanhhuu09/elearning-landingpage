import React from "react";
import { cta } from "../assets";
export const CallToAction = () => {
  return (
    <section className=" bg-[#f0faf7] ">
      <div className="m-auto flex max-w-screen-xl flex-col items-center gap-11 px-4 py-28 md:flex-row">
        <img src={cta} alt="Call To Action" />
        <div>
          <h1 className="text-center text-3xl font-semibold md:text-left">
            Join <span className="text-[#20B486]">World's largest</span>{" "}
            learning platform today
          </h1>
          <p className="mb-12 mt-3 text-center text-xl font-normal text-[#6D737A] md:text-left">
            Start learning by registering for free
          </p>
          <button className="rounded-lg bg-[#20B486] px-8 py-3 text-white max-[780px]:w-full">
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};
