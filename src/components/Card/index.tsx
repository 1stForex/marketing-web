"use client";
import { CardProps } from "@/src/types/Card.interface";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  isCarousel = false,
}) => {
  return (
    <Box
      sx={{
        maxWidth: "363px",
        minHeight: "408px",
        mr: isCarousel ? "20px" : "",
        width: "100%",
        borderRadius: "32px",
        background: "var(--Shade-White, #FFF)",
        boxShadow: "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "18px 22px 34px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--Grey-75, #F7F9FC)",
            borderRadius: "50%",
          }}
        >
          <Image
            src={image}
            alt="icon"
            style={{
              width: "50%",
              height: "50%",
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "var(--Shade-Black, #000)",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "var(--Grey-700, #344054)",
          textAlign: "center",

          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "145%",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Card;
