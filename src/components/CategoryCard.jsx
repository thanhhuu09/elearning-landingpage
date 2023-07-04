import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="group flex items-center gap-[10px] rounded-lg border-2 border-transparent bg-white px-2 py-4 drop-shadow-md hover:cursor-pointer hover:border-2 hover:border-[#20B486] md:px-6">
      <div>{icon}</div>
      <h2 className="w-full truncate text-xl text-[#1B1D1F] group-hover:text-[#000000]">
        {title}
      </h2>
      <div>
        <ArrowUpRightIcon className="h-9 w-9 rounded-lg p-2 text-[#20B486] group-hover:bg-[#20B486] group-hover:text-white" />
      </div>
    </div>
  );
};

export default CategoryCard;
