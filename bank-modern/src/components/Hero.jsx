import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className="flex flex-col items-center py-6 sm:py-16 md:w-full xl:flex-row xl:justify-center"
  >
    <div className="flex flex-1 flex-col items-start justify-center px-6 sm:px-16 lg:ml-20 xl:px-0">
      <div className="bg-gray-gradient mb-2 flex items-center rounded-lg px-1.5 py-1.5">
        <img src={discount} alt="discount" className="h-8 w-8" />
        <p>
          <span className="text-white">20% </span>
          <span className="text-gray-400">Discount For </span>
          <span className="text-white">1 Month </span>
          <span className="pr-1.5 text-gray-400">Account</span>
        </p>
      </div>

      <div className="flex w-full justify-start">
        <h1 className=" font-poppins text-5xl font-semibold leading-[72px] text-white sm:text-7xl sm:leading-[100px]">
          The Next
          <br />
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Genreration
          </span>
          <br />
          Payment Method
        </h1>
        <div className="hidden sm:flex">
          <GetStarted />
        </div>
      </div>

      <p className="mb-5 mt-5 font-poppins text-base font-normal text-white/40">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs <br />
        We examine annual percentage rates and annual fees.
      </p>
    </div>
    <div className="relative">
      <img src={robot} alt="robot" className="z-50 h-[600x] w-[600px]" />
      <div className="bg-pink-gradient absolute left-1/4 top-0 z-0 h-2/5 w-2/5 blur-[200px]" />
    </div>
  </section>
);
export default Hero;
