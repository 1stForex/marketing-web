"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

import Image from "next/image";
import { FeatureCardProps } from "@/src/types/FeatureCard.interface";

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Box
      sx={{
        minWidth: "290px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "40px",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        position: "relative",
        overflow: "hidden",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.11)",
          backdropFilter: "blur(8.1px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          width: "40px",
          height: "40px",
          backgroundColor: "#FF3B30",
          zIndex: 1,
          "@media (max-width: 768px)": {
            width: "35px",
            height: "35px",
          },
          "@media (max-width: 576px)": {
            width: "30px",
            height: "30px",
          },
        }}
      >
        <Image
          src={icon}
          alt="icon"
          style={{
            width: "50%",
            height: "50%",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "120%",
            letterSpacing: "-0.32px",
            "@media (max-width: 768px)": {
              fontSize: "14px",
            },
            "@media (max-width: 576px)": {
              fontSize: "12px",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "145%",
            "@media (max-width: 768px)": {
              fontSize: "10px",
            },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
