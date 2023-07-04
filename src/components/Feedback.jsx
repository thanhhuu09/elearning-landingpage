import React from "react";
import FeedbackCard from "./FeedbackCard";
import { avatar, avatar2 } from "../assets/";
import Slider from "react-slick";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section>
      <div className="m-auto flex flex-col px-4 py-24 md:max-w-screen-xl">
        <h1 className="text-4xl font-semibold">
          Student <span className="text-[#20B486]">Feedback</span>
        </h1>
        <p className="mb-12 text-xl font-normal text-[#6D737A]">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div>
          <Slider {...settings}>
            <FeedbackCard avatar={avatar} />
            <FeedbackCard avatar={avatar2} />
            <FeedbackCard avatar={avatar} />
            <FeedbackCard avatar={avatar2} />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
