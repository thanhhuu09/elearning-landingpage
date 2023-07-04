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
    <div className="group flex items-center py-4 md:px-6 px-2 bg-white rounded-lg drop-shadow-md gap-[10px] border-2 border-transparent hover:border-[#20B486] hover:border-2 hover:cursor-pointer">
      <div>
        <PaintBrushIcon className="h-10 w-10 text-gray-500 group-hover:text-black" />
      </div>
      <h2 className="text-[#1B1D1F] w-full text-xl group-hover:text-[#000000] truncate">
        Design
      </h2>
      <div>
        <ArrowUpRightIcon className="h-9 w-9 p-2 text-[#20B486] group-hover:bg-[#20B486] group-hover:text-white rounded-lg" />
      </div>
    </div>
  );
};

export default CategoryCard;
