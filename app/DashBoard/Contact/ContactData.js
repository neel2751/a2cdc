"use client";
import { getAllContactData } from "@/actions/contactAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ContactData = () => {
  const [data, setData] = useState();
  const getConactData = async () => {
    const date = new Date().toISOString().split("T")[0],
      page = 1,
      limit = 10;
    const response = await getAllContactData(date, page, limit);
    setData(response);
  };
  useEffect(() => {
    getConactData();
  }, []);

  return (
    <div className="lg:grid-cols-3 sm:grid-cols-2 gap-5 grid">
      {data?.map((item, index) => (
        <div class="p-5 border border-gray-200 rounded-xl flex-col flex space-y-4">
          <div class="flex justify-between">
            <div class="flex items-center border border-gray-200 rounded-md justify-center flex-col px-2 py-0.5">
              <span>{index + 1}</span>
            </div>

            <div>
              <label
                for="hs-pro-daicn1"
                class="relative sm:text-start sm:w-auto text-xs text-center py-1.5 px-2.5 rounded-lg cursor-pointer w-full block"
              >
                <Link
                  href={"#"}
                  className="bg-neutral-300 text-xs px-1.5 py-1.5 rounded-lg"
                >
                  <span class="relative text-neutral-800">Connect</span>
                </Link>
              </label>
            </div>
          </div>
          <div>
            <h3 class="font-medium text-gray-800">
              {item?.firstName + " " + item?.lastName}
            </h3>

            <p class="text-gray-500 text-sm mt-1">{item?.message}</p>
          </div>

          <button
            type="button"
            class=" shadow-sm text-gray-800 font-medium text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg gap-x-2 justify-center items-center w-full inline-flex"
          >
            View integration
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactData;
