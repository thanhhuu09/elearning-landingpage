import React from "react";
import StarRating from "./StarRating";

const Card = ({ title, category, price, rating, linkImage }) => {
  return (
    <div className="cursor-pointer rounded-3xl bg-white drop-shadow-sm mr-5 my-5">
      <div className="p-4">
        <div className="relative">
          <img
            className="rounded-xl object-contain"
            src={linkImage}
            alt="course"
          />
          <p className="absolute top-2 left-2 bg-white/90	 px-3 py-1 rounded-md font-medium">
            {category}
          </p>
        </div>
        <h1 className="my-4 truncate font-medium text-slate-900">{title}</h1>
        <StarRating rating={rating} />
      </div>
      <hr />
      <p className="p-4 text-2xl font-medium">{price}</p>
    </div>
  );
};

export default Card;
