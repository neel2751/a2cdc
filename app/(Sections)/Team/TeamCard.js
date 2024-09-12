"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamCard = ({ teamdata, category }) => {
  const filteredTeamData = teamdata.filter((article) =>
    article.department.includes(category)
  );

  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div
        className={`py-8 px-4 mx-auto max-w-screen-xl scroll-smooth lg:px-6`}
      >
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {filteredTeamData.map((item) => (
            <motion.div
              layoutId={item.id}
              key={item.id}
              ref={trigger}
              // onClick={() => openModel(item)}
              className="items-center bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 rounded-lg hover:cursor-pointer shadow sm:flex group overflow-clip"
            >
              {item.image ? (
                <div className="aspect-w-16 aspect-h-8 overflow-hidden">
                  <Image
                    width={600}
                    height={600}
                    className="hover:grayscale-0 transition duration-300 ease-in-out rounded-lg object-cover sm:rounded-none sm:rounded-l-lg group-hover:scale-110 "
                    src={
                      item.image.startsWith("/") ? item.image : `/${item.image}`
                    }
                    alt={`${item.name}'s picture.`}
                  />
                </div>
              ) : (
                <div className="bg-white h-[272px] flex justify-center transition items-center rounded-lg object-cover p-2 sm:rounded-none sm:rounded-l-lg ">
                  <Image
                    width={600}
                    height={600}
                    src={"/images/Logo_New.svg"}
                    className="w-full object-cover sm:size-48 lg:size-60 mx-auto"
                    alt={`${item.name}'s picture`}
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {item.firstName} {item.lastName}
                </h3>
                <span className="text-neutral-300">
                  {item.department}
                  <br />
                </span>
                <p className="mt-3 mb-4 font-light w-72 text-gray-500 dark:text-gray-400">
                  {item.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
