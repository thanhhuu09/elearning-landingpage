import React from "react";
import { achievement } from "../assets";

import {
  GraduationCap,
  Student,
  VideoCamera,
  UsersThree,
} from "@phosphor-icons/react";

const Achievement = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-sm flex-col items-center px-4 py-24 md:max-w-screen-xl md:flex-row">
        <div className="flex flex-col md:w-2/3 ">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Our <span className="text-[#20B486]">Achievement</span>
          </h1>
          <p className="mt-4 text-base font-normal text-[#6D737A] md:text-xl">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <div className="auto mt-10 grid grid-cols-2 gap-y-14 md:mt-20">
            <div className="flex items-center gap-4">
              <GraduationCap
                weight="thin"
                className="h-14 w-14 rounded-lg bg-green-600/10 p-2 text-green-500"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold md:text-2xl">300</h2>
                <p className="text-lg font-light">Instructor</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <VideoCamera
                weight="thin"
                className="h-14 w-14 rounded-lg bg-orange-500/10 p-2 text-orange-500"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold md:text-2xl">10,000+</h2>
                <p className="text-xl font-light">Video</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Student
                weight="thin"
                className="h-14 w-14 rounded-lg bg-[#FFEEF0] p-2 text-red-500"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold md:text-2xl">20,000+</h2>
                <p className="text-lg font-light">Student</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UsersThree
                weight="thin"
                className="h-14 w-14 rounded-lg bg-[#F0F7FF] p-2 text-[#0075FD]"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold md:text-2xl">
                  1,000,000+
                </h2>
                <p className="text-lg font-light">User</p>
              </div>
            </div>
          </div>
        </div>
        <img className="md:w-1/3" src={achievement} alt="Achievement" />
      </div>
    </section>
  );
};

export default Achievement;
