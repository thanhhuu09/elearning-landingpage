import React from "react";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";

export const Companies = () => {
  return (
    <section className="flex flex-col items-center gap-4 py-12 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-[#536E96]">
        Trusted by over 25,000 teams around the world.
      </h1>
      <p className="my-4 text-xl md:text-2xl font-normal text-[#536E96]">
        Leading companies use the same courses to help employees keep their
        skills fresh.
      </p>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <img src={companyLogo1} alt="" />
        <img src={companyLogo2} alt="" />
        <img src={companyLogo3} alt="" />
        <img src={companyLogo4} alt="" />
      </div>
    </section>
  );
};
