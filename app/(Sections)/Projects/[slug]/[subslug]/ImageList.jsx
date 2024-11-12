"use client";
import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";

// Memoized ImageItem component to prevent unnecessary re-renders
const ImageItem = memo(function ImageItem({ src, alt, onError, itemHeight }) {
  return (
    <Image
      className="rounded-md"
      width={itemHeight * 1.33} // Assuming a 4:3 aspect ratio
      height={itemHeight}
      src={src}
      alt={alt}
      onError={onError}
      loading="lazy"
    />
  );
});

const ImageList = ({ imagesLink, imagesUrl }) => {
  const [brokenImages, setBrokenImages] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imagesPerRow, setImagesPerRow] = useState(1);
  const [itemHeight, setItemHeight] = useState(0);

  const url = "https://cdc.construction/images/projects/";
  const fallbackImage = "https://cdc.construction/images/fallback.svg";
  const maxRetries = 3;

  const handleImageError = useCallback((index) => {
    setBrokenImages((prevBrokenImages) => {
      const retries = prevBrokenImages[index]?.retries || 0;
      if (retries < maxRetries) {
        setTimeout(() => {
          setBrokenImages((prevState) => ({
            ...prevState,
            [index]: { retries: retries + 1, isBroken: false },
          }));
        }, 1000);
      } else {
        return {
          ...prevBrokenImages,
          [index]: { retries, isBroken: true },
        };
      }
      return prevBrokenImages;
    });
  }, []);

  const totalImages = imagesLink;

  // Update images per row and item height based on window width
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 640) {
        setImagesPerRow(1); // Small screens (mobile)
      } else if (width <= 1024) {
        setImagesPerRow(2); // Medium screens (tablet)
      } else {
        setImagesPerRow(3); // Large screens (desktop)
      }

      // Dynamically calculate item height based on the image aspect ratio and imagesPerRow
      const imageWidth = Math.floor(width / imagesPerRow);
      const imageHeight = Math.floor(imageWidth * 0.75); // Assuming a 4:3 aspect ratio
      setItemHeight(imageHeight);
    };

    window.addEventListener("resize", updateLayout);
    updateLayout(); // Initial calculation on mount

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [windowWidth, imagesPerRow]);

  return (
    <div
      className="grid gap-2 grid-cols-3 sm:grid-cols-4"
      style={{
        gridTemplateColumns: `repeat(${imagesPerRow}, 1fr)`, // Dynamically set grid layout
      }}
    >
      {/* Render images dynamically */}
      {Array.from({ length: totalImages }).map((_, imgIdx) => {
        const isBroken = brokenImages[imgIdx]?.isBroken;

        return (
          <div key={imgIdx} className="px-1">
            <ImageItem
              src={
                isBroken
                  ? fallbackImage
                  : `${url}${imagesUrl}/${imgIdx + 1}.jpg` // Construct the image URL
              }
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              fallback={fallbackImage}
              alt={`Project Image ${imgIdx + 1}`}
              onError={() => handleImageError(imgIdx)}
              itemHeight={itemHeight} // Dynamically calculated item height
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
