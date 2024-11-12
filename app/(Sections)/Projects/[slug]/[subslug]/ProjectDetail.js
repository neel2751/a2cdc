"use client";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Try from "./try";
// import { ImageList } from "./ImageList";

// Dynamically import the ImageList component
const ImageList = dynamic(() => import("./ImageList"), {
  ssr: false,
});

const ProjectDetail = memo(function ProjectDetail({ data }) {
  return (
    <>
      <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5 md:space-y-8">
            {/* Previous Link Back Link */}
            <Link
              href={`/Projects/${data?.project}`}
              className="text-xs text-neutral-600 flex items-center gap-2 group transition duration-700 ease-in-out underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" group-hover:block hidden size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:hidden block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Back to Projects
            </Link>
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-xl font-semibold md:text-xl">
                {data?.title}
              </h2>
              <p className="text-lg text-gray-800">{data?.description}</p>
            </div>
            {/* Render the virtualized image list */}
            <Try imagesLink={data.images} imagesUrl={data.images_link} />
          </div>
        </div>
      </div>
    </>
  );
});

export default ProjectDetail;
