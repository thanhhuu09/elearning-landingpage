import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import courses from "../data/Courses.js";

const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <section className="flex-col gap-4 bg-[#f0faf7] py-24 px-36">
      <div className="m-auto max-w-screen-xl">
        <h1 className="font-medium text-[3.5rem]">
          Most Popular <span className="text-[#20B486]">Courses</span>
        </h1>
        <p className="font-normal text-xl text-[#6D737A] my-4">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div>
          <Slider {...settings}>
            {courses.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                linkImage={item.linkImage}
                rating={item.rating}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Courses;
