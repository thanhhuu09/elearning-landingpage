import React from "react";
import { PaintBrushIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const CategoryCard = () => {
  const category = [
    {
      id: 1,
      icon: <PaintBrushIcon />,
      title: "Design",
    },
  ];
  return (
    <div className="group flex items-center w-fit py-4 px-6 bg-white rounded-lg drop-shadow-md gap-[10px] border-2 border-transparent hover:border-[#20B486] hover:border-2 hover:cursor-pointer">
      <PaintBrushIcon className="h-10 w-10 text-gray-500 group-hover:text-black" />
      <h2 className="text-[#1B1D1F] w-32 text-xl group-hover:text-[#000000]">
        Design
      </h2>
      <ArrowUpRightIcon className="h-9 w-9 p-2 text-[#20B486] group-hover:bg-[#20B486] group-hover:text-white rounded-lg" />
    </div>
  );
};

export default CategoryCard;
