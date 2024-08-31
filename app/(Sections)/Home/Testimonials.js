import TestiCard from "@/app/component/TestiCard/TestiCard";
import { TESTIMONIALS } from "@/app/data/data";
import React from "react";

const Testimonials = () => {
  return (
    <section className="xl:py-20 mt-20 xl:mt-0">
      <div className="px-24 space-y-4 max-w-2xl">
        <span className="text-blue-800 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600  before:rounded-full">
          Happy Clients
        </span>
        <h5 className="font-bold text-gray-800 text-3xl">
          Client’s Say About Us
        </h5>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          {TESTIMONIALS.map((item) => (
            <TestiCard
              key={item.id}
              id={item.id}
              name={item.name}
              date={item.date}
              text={item.text}
            />
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* // <!-- End Testimonials --> */}
    </section>
  );
};

export default Testimonials;
