"use client";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import HeroStatic from "@/app/component/Hero/Hero";
import { Home } from "@/app/data/data";
import React from "react";
import Leagecy from "./Leagecy";
import { WhyData } from "./WhyUs/whyData";
import WhyUs from "./WhyUs/whyUs";
import Services from "./Services/services";
import Features from "./Feature";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import CTA from "@/app/component/CTA/CTA";
import Footer from "@/app/component/Footer/Footer";

const home = () => {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <HeroStatic
        company={Home.company}
        title={Home.title}
        desc={Home.desc}
        tag={Home.tag}
      />
      <Leagecy />
      <WhyData>
        <WhyUs />
      </WhyData>
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default home;
