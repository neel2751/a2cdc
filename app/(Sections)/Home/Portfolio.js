import React, { Suspense, memo } from "react";
import Image from "next/image";
import { PORTFOLIO } from "@/app/data/data";
import Link from "next/link";
import Loading from "./loading";

const Portfolio = () => {
  return (
    <>
      <Test />
    </>
  );
};

const Test = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-20 md:pb-24 lg:pt-24">
          {/* <!-- Title --> */}
          <div className="lg:px-8 py-8 px-6">
            <div className=" text-center max-w-2xl mx-auto">
              <p className="text-[#007dff] leading-7 font-semibold text-base">
                Remarkable Project
              </p>
              <h2 className="sm:text-5xl text-neutral-900 tracking-tight font-bold text-4xl mt-2">
                Our Leatest Project
              </h2>
              <p className="text-neutral-600 font-medium tracking-tight text-lg mt-4">
                Explore our extensive portfolio showcasing the breadth of our
                expertise, from iconic structures to sustainable solutions, all
                meticulously crafted to perfection
              </p>
            </div>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Examples --> */}
          <div className="relative pe-4 sm:pe-6 lg:pe-8 me-[calc(-1px-(100vw-100%)/2)] after:absolute after:inset-y-0 after:end-0 after:z-10 after:w-20 sm:after:w-24 xl:after:w-44 after:h-full after:bg-gradient-to-l after:from-white">
            <div className="flex overflow-x-auto space-x-3 md:space-x-6 pb-3 [&amp;::-webkit-scrollbar]:h-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-neutral-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-neutral-500">
              {PORTFOLIO.filter((item) => item.home).map((portfolio) => (
                <Suspense fallback={<Loading />}>
                  <ProjectSlider key={portfolio.id} {...portfolio} />
                </Suspense>
              ))}
            </div>
          </div>
          {/* <!-- End Examples --> */}
        </div>
      </div>
    </>
  );
};

const ProjectSlider = memo(({ link, image, images_link, title, project }) => {
  return (
    <Link
      className="sm:pb-8 pb-0 sm:px-8 overflow-hidden  isolate snap-center group shrink-0 relative w-96 sm:w-[500px] lg:w-[640px] h-auto bg-gray-50 rounded-2xl p-2 md:p-4 before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-2xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg"
      href={`/Projects/${project}/${link}`}
      target="_blank"
      rel="noreferrer"
      aria-label={title}
      title={title}
    >
      <span className="overflow-hidden">
        <Image
          className="rounded-xl shadow-sm"
          src={"/images/projects/" + images_link + "/" + image}
          alt={title}
          width={1300}
          height={800}
        />
      </span>
      <div className=" bg-gradient-to-t from-[#cef2ff] via-[#28ccff]/10 to-[#0053e3]/0 absolute inset-0 -z-10"></div>
      <div className="ring ring-gray-900/10 ring-inset shadow-sm rounded-2xl -z-10 inset-0 absolute"></div>
      <div className="px-2 pt-2">
        <div className="text-neutral-800 leading-6 text-sm overflow-hidden gap-y-1 items-center flex-wrap flex">
          {project}
        </div>
        <p className="text-neutral-900 leading-6 font-semibold sm:text-xl text-base mt-1">
          {title}
        </p>
      </div>
    </Link>
  );
});

export default Portfolio;
