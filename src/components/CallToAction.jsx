import React from "react";
import { cta } from "../assets";
export const CallToAction = () => {
  return (
    <section className=" bg-[#f0faf7] ">
      <div className="flex items-center max-w-screen-xl m-auto gap-11 py-28">
        <img src={cta} alt="Call To Action" />
        <div>
          <h1 className="font-semibold text-[40px]">
            Join <span className="text-[#20B486]">World's largest</span>{" "}
            learning platform today
          </h1>
          <p className="mt-3 mb-12 text-2xl">
            Start learning by registering for free
          </p>
          <button className="rounded-lg bg-[#20B486] px-8 py-3 text-white">
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};
