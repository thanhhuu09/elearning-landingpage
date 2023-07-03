import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((item, index) => (
        <StarIcon key={index} className="h-6 w-6 text-yellow-400" />
      ))}
      {[...Array(5 - rating)].map((item, index) => (
        <StarIcon key={index} className="h-6 w-6 text-gray-400" />
      ))}
      <p className="ml-2">(15)</p>
    </div>
  );
};

export default StarRating;
