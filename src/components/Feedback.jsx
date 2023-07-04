import React from "react";
import FeedbackCard from "./FeedbackCard";
import { avatar, quotationMark, avatar2 } from "../assets/";
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
      <div className="flex flex-col py-36 m-auto max-w-screen-sm md:max-w-screen-xl px-4">
        <h1 className="font-semibold text-[40px]">
          Student <span className="text-[#20B486]">Feedback</span>
        </h1>
        <p className="font-normal text-[#6D737A] text-xl mb-12">
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
