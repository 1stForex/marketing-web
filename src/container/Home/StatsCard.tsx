"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowUp from "@/src/assets/icons/arrow-up.svg";
import ArrowDown from "@/src/assets/icons/arrow-down.svg";
import StatsUp from "@/src/assets/icons/stats-up.svg";
import StatsDown from "@/src/assets/icons/stats-down.svg";

import Image from "next/image";
import { StatsCardProps } from "@/src/types/StatsCard.interface";

const StatsCard: React.FC<StatsCardProps> = ({ name, value, description }) => {
  const isPositive = value > 0;
  const icon = isPositive ? ArrowUp : ArrowDown;
  const statsIcon = isPositive ? StatsUp : StatsDown;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        borderRadius: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#FFF",
        minWidth: "231px",
        gap: "8px",
        mr: "17px",
        "@media (max-width: 576px)": {
          mr: "12px",
          minWidth: "196px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          width: "40px",
          height: "40px",
          backgroundColor: isPositive ? "#40B869" : "#FF3B30",
          color: "#FFF",
          "@media (max-width: 576px)": {
            width: "32px",
            height: "32px",
          },
        }}
      >
        <Image
          src={icon}
          alt={isPositive ? "Positive" : "Negative"}
          style={{
            width: "50%",
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          "@media (max-width: 576px)": {
            gap: "2px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "120%",
            letterSpacing: "-0.4px",
            "@media (max-width: 576px)": {
              fontSize: "12px",
              letterSpacing: "-0.24px",
            },
          }}
        >
          {name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Box
            sx={{
              background: "#E7F6EC",
              borderRadius: "10px",
              display: "flex",
              gap: "2px",
              alignItems: "center",
              padding: "0 4px",
            }}
          >
            <Image src={statsIcon} alt="stats" width={12} height={12} />
            <Typography
              sx={{
                color: isPositive ? "#036B26" : "#F30",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "145%",
                letterSpacing: "-0.06px",
              }}
            >
              {Math.abs(value)}%
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "145%",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsCard;
