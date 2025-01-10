import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ForexLogo from "@/src/assets/icons/forex.svg";
import React from "react";
import RatingStars from "@/src/components/RatingStars";
import { CourseCardProps } from "@/src/types/CourseCard.interface";

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  price,
  description,
  rating,
  reviews,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "387px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "352px",
          borderRadius: "32px",
          background: "var(--Grey-50, #F9FAFB)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={ForexLogo} alt="logo" />
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "2px",
          }}
        >
          <Typography
            sx={{
              color: "var(--Grey-900, #101928)",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "145%",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "var(--Grey-900, #101928)",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "145%",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "11px", fontWeight: 700 }}>$</span>
            {price.toFixed(2)}
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "var(--Grey-800, #1D2739)",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "145%",
            maxWidth: "305px",
            mb: "4px",
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <RatingStars rating={rating} />

          <Typography
            sx={{
              color: "var(--Grey-800, #1D2739)",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
            }}
          >
            ({reviews})
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
