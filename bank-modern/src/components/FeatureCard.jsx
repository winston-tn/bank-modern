import React from "react";

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="hover:bg-gray-gradient hover:shadow-card-shadow flex rounded-[20px] p-6">
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full">
        <img src={icon} alt="icon" className="h-1/2 w-1/2 object-contain" />
      </div>
      <div className="ml-3 flex flex-1 flex-col">
        <h4 className="mb-1 font-poppins text-lg font-semibold text-white">
          {title}
        </h4>
        <p className="font-poppins text-base font-normal text-white/50">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
