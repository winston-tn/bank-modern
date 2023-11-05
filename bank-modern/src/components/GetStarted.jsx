import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="bg-blue-gradient flex h-36 w-36 cursor-pointer items-start justify-center rounded-full p-[2px]">
    <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-full">
      <div className="flex items-center justify-center">
        <p className="bg-text-gradient bg-clip-text font-poppins text-lg font-medium text-transparent">
          Get
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="ml-2 h-6 w-6 object-contain"
        />
      </div>
      <p className="bg-text-gradient bg-clip-text font-poppins text-lg font-medium text-transparent">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
