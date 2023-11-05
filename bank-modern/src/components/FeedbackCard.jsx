import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-6 lg:mr-10">
      <div>
        <img
          src={quotes}
          alt="quote"
          className="h-[27px] w-[42px] object-contain"
        />
        <p className="my-10 font-poppins text-lg text-white">{content}</p>
      </div>
      <div className="flex">
        <img src={img} alt="image" className="h-[48px] w-[48px] rounded-full" />
        <div className="ml-4 flex flex-col">
          <h4 className="font-poppins text-xl font-semibold text-white">
            {name}
          </h4>
          <p className="font-poppins text-white/50">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
