"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import StocksImg from "@/src/assets/images/Stocks.png";

const Stocks = () => {
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "5/3",
      }}
    >
      <Image
        src={StocksImg}
        alt="stocks"
        fill
        objectFit="cover"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default Stocks;
