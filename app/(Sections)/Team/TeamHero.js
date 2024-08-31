import HeroStatic from "@/app/component/Hero/Hero";
import React from "react";
import { Team } from "@/app/data/data";

const TeamHero = () => {
  return <HeroStatic title={Team.title} desc={Team.desc} />;
};

export default TeamHero;
