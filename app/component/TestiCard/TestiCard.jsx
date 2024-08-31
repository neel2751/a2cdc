import React from "react";

const TestiCard = ({ id, name, date, text }) => {
  return (
    <div
      key={id}
      className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl  dark:border-gray-700"
    >
      <div className="flex-auto p-4 md:p-6">
        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl ">
          <em>{text}</em>
        </p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h6 className="text-sm font-semibold text-gray-800 sm:text-base">
          {name}
        </h6>
        <p className="text-sm text-gray-600 sm:text-base">{date}</p>
        {/* <p className="text-sm text-gray-600">03/Jun/2023</p> */}
      </div>
    </div>
  );
};

export default TestiCard;
