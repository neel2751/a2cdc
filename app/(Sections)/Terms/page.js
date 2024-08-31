import Footer from "@/app/component/Footer/Footer";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import React from "react";
import Terms from "./Terms";

const page = () => {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <div className="max-w-7xl mx-auto py-10 sm:px-5 px-10">
        <Terms />
      </div>
      <Footer />
    </>
  );
};

export default page;
