import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section className="mb-6 flex flex-col items-center justify-between lg:flex-row xl:mb-20">
    {stats.map((stat) => (
      <div key={stat.id} className="m-4 flex items-center justify-start lg:m-0">
        <h4 className="font-poppins text-3xl font-semibold text-white sm:text-4xl">
          {stat.value}
        </h4>
        <p className="bg-text-gradient bg-clip-text font-poppins text-base font-normal uppercase text-transparent sm:text-xl">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
