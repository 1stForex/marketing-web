"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const CustomVideo = () => {
  const t = useTranslations("Media");
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
      {t("unsupportedVideo")}
    </video>
  );
};

export default CustomVideo;
