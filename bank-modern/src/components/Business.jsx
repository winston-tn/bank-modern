import React from "react";
import { features } from "../constants";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => (
  <section className="flex flex-col py-6 sm:py-16 lg:flex-row">
    <div className="flex flex-1 flex-col items-start justify-center">
      <h2 className="mb-5 w-full font-poppins text-4xl font-semibold text-white">
        You do the business,
        <br /> we'll handle the money
      </h2>
      <p className="mb-3 max-w-[470px] font-poppins text-lg font-normal text-white/40">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button />
    </div>

    <div className="relative ml-0 mt-4 flex flex-col items-start justify-center lg:ml-10 lg:mt-10">
      {features.map((feature, idx) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
