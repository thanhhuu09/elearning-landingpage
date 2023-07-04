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
    <section className="bg-[#f0faf7]">
      <div className="m-auto max-w-screen-sm flex-col gap-4 px-4 py-24 md:max-w-screen-xl">
        <div className="m-auto max-w-screen-xl">
          <h1 className="text-4xl font-medium">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="my-4 text-xl font-normal text-[#6D737A]">
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
