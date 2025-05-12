"use client";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Dashboard from "@/src/assets/images/dashboard.png";
import mobileDashboard from "@/src/assets/images/mobile-dashboard.png";

const Stocks = () => {
  const isSmallScreen = useMediaQuery("(max-width: 576px)");
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: isSmallScreen ? "326/413" : "33/25",
      }}
    >
      <Image
        src={isSmallScreen ? mobileDashboard : Dashboard}
        alt="stocks"
        fill
        style={{ width: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default Stocks;
