import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="bg-gray-gradient my-6 flex flex-col items-center justify-center gap-20 rounded-[20px] py-6 shadow-xl  lg:flex-row lg:py-16">
      <div className="flex flex-col">
        <h2 className="mx-5 font-poppins text-4xl font-semibold text-white">
          Let's try our service now!
        </h2>
        <p className="mx-2 mt-5 max-w-[470px] font-poppins text-white/50">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
