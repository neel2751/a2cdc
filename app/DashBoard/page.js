import React from "react";
import NavForm from "./NavForm";
import NavTable from "./NavBar/NavTable";
import UseNavlink from "./NavBar/useNavlink";

const page = () => {
  return (
    <>
      <div className="p-4">
        <h1>This is the Dashbaord</h1>
        {/* <NavTable /> */}
        <UseNavlink />
        {/* <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> */}
        {/* <div className="bg-white rounded-xl shadow p-4 sm:p-7 "> */}
        {/* <NavForm /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default page;
