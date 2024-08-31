"use client";
import React from "react";
import { SubMenu } from "@/app/component/Header/submenu";
import Navbar from "@/app/component/Header/navbar";
import AboutHero from "./AboutHero";
import Footer from "@/app/component/Footer/Footer";
import AboutFeatures from "./AboutFeature";
import OurVision from "./OurVision";

const page = () => {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <AboutHero />
      <AboutFeatures />
      <OurVision />
      <Footer />
    </>
  );
};

export default page;
