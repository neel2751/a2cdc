import { ADMINNAVBAR } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div
      id="hs-application-sidebar"
      className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  "
      role="dialog"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-6 pt-4">
          <Link
            className="flex-none rounded-xl text-xl inline-flex font-semibold focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Preline"
          >
            <Image
              src={"/images/CDC_Logo.svg"}
              alt="CDC"
              height={20}
              width={20}
              className="w-12 h-auto"
            />
            <span className="text-xs ms-4 font-semibold text-neutral-600">
              Creative Design & Construction
            </span>
          </Link>
        </div>

        <div className="h-full overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 ">
          <nav
            className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open=""
          >
            <ul className="flex flex-col space-y-1">
              {ADMINNAVBAR.map((item, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href={`/DashBoard${item.link}`}
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
