import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="flex items-center justify-center px-6 sm:px-16">
      <div className="w-full 2xl:max-w-screen-xl">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary ">
      <div className="w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex items-start justify-center px-6 sm:px-16">
      <div className="w-full 2xl:max-w-screen-xl">
        <Stats />
        <Business />
        <Billing />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
