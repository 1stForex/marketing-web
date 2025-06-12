"use client";
import React, { useEffect, useRef } from "react";

const CustomVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // added to resolve Sarafi autoplay issues by forcefully / manually playing the video
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Safari sometimes needs this redundantly
      video.playsInline = true; // Redundant for safety
      video.play().catch((err) => {
        console.warn("Autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    >
      <source src="/HeroBgVideo.webm" type="video/webm" />
      <source src="/HeroBgVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default CustomVideo;
