import React from "react";
import Image from "next/image";
// import AbImg from "../../public/images/aboutus/about.webp";

export const SectionImage = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={1300}
      height={800}
    />
  );
};
