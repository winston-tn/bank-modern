import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="my-10 flex w-full items-center justify-center gap-20">
      {clients.map((client) => (
        <div key={client.id} className="flex items-center justify-center ">
          <img
            src={client.logo}
            alt="logo"
            className="w-[100px] object-contain lg:w-[192px]"
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
