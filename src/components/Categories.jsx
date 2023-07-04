import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="bg-[#f0faf7]">
      <div className="m-auto max-w-screen-sm md:max-w-screen-xl px-4 py-32">
        <h1 className="font-semibold text-4xl">
          Most <span className="text-[#20B486]">Popular Categories</span>
        </h1>
        <p className="font-normal text-[#6D737A] text-base md:text-xl mb-12 mt-4">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 md:gap-6">
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
