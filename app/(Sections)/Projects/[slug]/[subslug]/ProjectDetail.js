"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProjectDetail = ({ data }) => {
  const [brokenImages, setBrokenImages] = useState({});

  // Shimmer effect for placeholder
  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const url = "/images/projects/";
  const fallbackImage = "/images/fallback.jpg"; // A fallback image path
  const maxRetries = 3; // Maximum number of retry attempts

  // Handle image load error with retry mechanism
  const handleImageError = (index) => {
    setBrokenImages((prevBrokenImages) => {
      const retries = prevBrokenImages[index]?.retries || 0;

      // If retries are less than max, retry loading after a short delay
      if (retries < maxRetries) {
        setTimeout(() => {
          setBrokenImages((prevState) => ({
            ...prevState,
            [index]: { retries: retries + 1, isBroken: false },
          }));
        }, 1000); // Retry after 1 second
      } else {
        // If max retries reached, mark image as broken
        return {
          ...prevBrokenImages,
          [index]: { retries, isBroken: true },
        };
      }

      return prevBrokenImages;
    });
  };

  const images = [];
  for (let i = 1; i <= data.images; i++) {
    const isBroken = brokenImages[i]?.isBroken;

    images.push(
      <Image
        className="rounded-xl"
        width={800}
        height={600}
        src={isBroken ? fallbackImage : `${url}${data.images_link}/${i}.jpg`}
        alt={`Project Image ${i}`}
        key={i}
        onError={() => handleImageError(i)} // Retry loading if error
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
      />
    );
  }

  return (
    <>
      <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {data.title}
              </h2>
              <p className="text-lg text-gray-800">{data.description}</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              {images}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
