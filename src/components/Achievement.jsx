import React from "react";
import { achievement } from "../assets";
import {
  AcademicCapIcon,
  VideoCameraIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Achievement = () => {
  return (
    <section className="flex max-w-screen-xl mx-auto items-center">
      <div className="flex flex-col w-2/3 ">
        <h1 className="text-5xl font-semibold">
          Our <span className="text-[#20B486]">Achievement</span>
        </h1>
        <p className="font-normal text-xl text-[#6D737A] mt-4">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-14 mt-20">
          <div className="flex items-center gap-4">
            <AcademicCapIcon className="h-14 w-14 bg-green-600/10 text-green-500 p-2 rounded-lg" />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">300</h2>
              <p className="font-light text-lg">Instructor</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <VideoCameraIcon className="h-14 w-14 bg-orange-500/10 text-orange-500 p-2 rounded-lg" />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">10,000+</h2>
              <p className="font-light text-xl">Video</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <AcademicCapIcon className="h-14 w-14 bg-[#FFEEF0] text-red-500 p-2 rounded-lg" />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">20,000+</h2>
              <p className="font-light text-lg">Student</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <UserGroupIcon className="h-14 w-14 bg-[#F0F7FF] text-[#0075FD] p-2 rounded-lg" />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">1,000,000+</h2>
              <p className="font-light text-lg">User's</p>
            </div>
          </div>
        </div>
      </div>
      <img className="w-1/3" src={achievement} alt="Achievement" />
    </section>
  );
};

export default Achievement;
