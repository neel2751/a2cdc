"use client";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import Footer from "@/app/component/Footer/Footer";
import { PROJECT } from "@/app/data/data";
import NotFound from "@/app/not-found";
import Project from "./test";
import { Suspense } from "react";

export default function Page({ params }) {
  const { slug } = params;
  const project = PROJECT.find((item) => item.name === slug);
  if (!project) return <NotFound />;
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <Suspense fallback="loading...">
        <Project name={project.name} />
      </Suspense>
      {/* <ProjectDetail data={project} /> */}
      {/* {project ? <NotFound /> : <ProjectDetail data={project} />} */}
      <Footer />
    </>
  );
}
