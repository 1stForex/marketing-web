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
        style={{ width: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default Stocks;
