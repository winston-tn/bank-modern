import React from "react";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section className="relative flex flex-col-reverse py-6 lg:flex-row lg:py-16">
      <div className="relative mr-0 mt-10 flex items-center justify-center lg:mr-10 lg:mt-0 ">
        <img src={bill} alt="billing" className="z-50 h-full w-full" />
      </div>
      <div className="absolute -left-1/2 top-0 z-30 h-1/2 w-1/2 rounded-full bg-white/60 blur-[700px]"></div>
      <div className="bg-pink-gradient absolute -left-1/2 bottom-0 z-0 h-1/2 w-1/2 rounded-full blur-[900px]"></div>
      <div className="flex flex-col items-start justify-center ">
        <h2 className="w-full font-poppins text-4xl font-semibold text-white">
          Easily control your billing & invoicing.
        </h2>
        <p className="mt-5 max-w-[470px] font-poppins text-lg text-white/50">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div className="mt-6 flex w-full flex-wrap justify-center gap-6 lg:mt-10">
          <img
            src={apple}
            alt="app store"
            className="h-[50px] w-[150px] cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="google store"
            className="h-[50px] w-[150px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
