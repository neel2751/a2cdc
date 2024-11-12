"use client";
import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";

// Memoized ImageItem component to prevent unnecessary re-renders
const ImageItem = memo(function ImageItem({
  src,
  alt,
  onError,
  itemHeight,
  onClick,
}) {
  return (
    <Image
      className="rounded-md cursor-pointer transition-transform transform"
      width={itemHeight * 1.33} // Assuming a 4:3 aspect ratio
      height={Math.floor(Math.random() * 400 + 300)}
      src={src}
      alt={alt}
      onError={onError}
      loading="lazy"
      onClick={onClick} // Open in lightbox on click
    />
  );
});

const ImageList = ({ imagesLink, imagesUrl }) => {
  const [brokenImages, setBrokenImages] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imagesPerRow, setImagesPerRow] = useState(1);
  const [itemHeight, setItemHeight] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

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
        setImagesPerRow(2); // Small screens
      } else if (width <= 1024) {
        setImagesPerRow(2); // Medium screens
      } else {
        setImagesPerRow(2); // Large screens
      }

      const imageWidth = Math.floor(width / imagesPerRow);
      const imageHeight = Math.floor(imageWidth * 0.75); // Assuming a 4:3 aspect ratio
      setItemHeight(imageHeight);
    };

    window.addEventListener("resize", updateLayout);
    updateLayout();

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [windowWidth, imagesPerRow]);

  // Open the lightbox with the selected image
  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      {/* Masonry Grid Gallery */}
      <div className="px-2 my-3 grid grid-cols-gallery">
        {/* Render images dynamically */}
        {Array.from({ length: totalImages }).map((_, imgIdx) => {
          const isBroken = brokenImages[imgIdx]?.isBroken;
          const src = isBroken
            ? fallbackImage
            : `${url}${imagesUrl}/${imgIdx + 1}.jpg`;

          return (
            // <div key={imgIdx} className="px-1">
            <ImageItem
              src={src}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={`Project Image ${imgIdx + 1}`}
              onError={() => handleImageError(imgIdx)}
              itemHeight={itemHeight}
              onClick={() => openLightbox(src)}
            />
            // </div>
          );
        })}
      </div>

      {/* Lightbox for image preview */}
      {lightboxImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeLightbox}
        >
          <Image
            src={lightboxImage}
            alt="Enlarged view"
            className="max-w-full max-h-full"
            height={900}
            width={900}
          />
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ImageList;
