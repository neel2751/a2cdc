import React from "react";

const Video = () => {
  return (
    <video
      className="rounded-2xl w-full h-full object-cover"
      autoPlay={true}
      muted
      loop
      playsInline={true}
      preload="auto"
      poster="/images/poster.svg" // Add a poster image to improve perceived load time
    >
      <source
        className="h-full w-full"
        src="https://cdc.construction/video/CDC.mp4"
        type="video/mp4"
      />
      <source src="/path-to-video.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
