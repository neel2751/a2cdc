"use client";
import HeroStatic from "@/app/component/Hero/Hero";
import { About } from "@/app/data/data";
import React from "react";

const AboutHero = () => {
  return <HeroStatic title={About.title} desc={About.desc} img={About.image} />;
};

export default AboutHero;
