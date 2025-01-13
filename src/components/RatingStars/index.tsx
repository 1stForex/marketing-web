import React from "react";
import { Box } from "@mui/material";
import Star from "@/src/assets/icons/star.svg";
import Image from "next/image";
import { RatingStarsProps } from "@/src/types/RatingStars.interface";

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const clampedRating = Math.min(rating, 5);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {Array.from({ length: clampedRating }, (_, index) => (
        <Image src={Star} alt="star" key={index} />
      ))}
    </Box>
  );
};

export default RatingStars;
