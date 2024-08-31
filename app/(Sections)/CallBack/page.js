"use client";
import React from "react";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import Footer from "@/app/component/Footer/Footer";
import CallBack from "./CallBack";

const page = () => {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <CallBack />
      <Footer />
    </>
  );
};

export default page;
