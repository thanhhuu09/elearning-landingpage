import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="bg-[#f0faf7] py-[135px] ">
      <div className="m-auto max-w-screen-xl ">
        <h1 className="font-semibold text-[40px]">
          Most <span className="text-[#20B486]">Popular Categories</span>
        </h1>
        <p className="font-normal text-[#6D737A] text-xl mb-12">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid grid-cols-4 grid-rows-3 w-full gap-6">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default Categories;
