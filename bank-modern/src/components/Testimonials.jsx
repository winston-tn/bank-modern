import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className="relative mt-8 flex flex-col items-center justify-center">
      <div className="bg-blue-gradient absolute -right-1/2 z-0 h-3/5 w-3/5 rounded-full blur-[450px]"></div>
      <div className="z-10 mb-6 flex w-full flex-col items-center justify-between lg:mb-16 lg:flex-row">
        <h1 className="w-full font-poppins text-4xl font-semibold text-white">
          What people are <br /> saying about us
        </h1>
        <div className="mt-6 w-full lg:mt-0">
          <p className="max-w-[450px] text-left font-poppins text-lg text-white/50">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex w-full flex-wrap justify-center ">
        {feedback.map((card) => (
          <FeedbackCard keu={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
