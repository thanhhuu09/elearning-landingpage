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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full bg-[#f0faf7] py-24">
      <div className="flex-col gap-4 m-auto px-12 max-w-screen-sm md:max-w-screen-xl">
        <div className="m-auto max-w-screen-xl">
          <h1 className="font-medium text-4xl md:text-5xl">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="font-normal text-base md:text-xl text-[#6D737A] my-4">
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
      </div>
    </section>
  );
};

export default Courses;
