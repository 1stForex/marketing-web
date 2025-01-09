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
        minWidth: "300px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderRadius: "40px",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        background: "rgba(255, 255, 255, 0.11)",
        backdropFilter: "blur(8.1px)",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          padding: "10px",
          backgroundColor: "#FF3B30",
        }}
      >
        <Image src={icon} alt="icon" width={20} height={20} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "120%",
            letterSpacing: "-0.32px",
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
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
