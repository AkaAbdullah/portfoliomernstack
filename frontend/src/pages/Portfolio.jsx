import React from "react";
import { ScrollCard } from "../components/ScrollCard";

export const Portfolio = () => {
  return (
    <section
      name="Portfolio"
      className="w-full h-full flex justify-center bg-neutral-900 text-white "
    >
      <div className="container max-w-6xl mx-auto p-4 ">
        <div className="flex md:flex-col md:items-start items-center justify-center mt-10 mb-5">
          <h1 className="text-6xl  underline">Portfolio</h1>
        </div>
        <p className="text-sm md:text-xl lg:text-start text-center mb-5 ">
          Following are some of my very Recent Projects
        </p>
        <div className="  grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          <ScrollCard />
        </div>
      </div>
    </section>
  );
};
