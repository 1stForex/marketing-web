import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RatingStars from "@/src/components/RatingStars";
import { CourseCardProps } from "@/src/types/CourseCard.interface";

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  price,
  description,
  rating,
  reviews,
  image,
  oldPrice,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        width: "100%",
        padding: "24px",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0 1px 1px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05)",
        alignItems: "center",
        mb: "64px",

        "@media (max-width: 786px)": {
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          mb: "40px",
        },
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: "400px",
          height: "300px",
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "@media (max-width: 1200px)": {
            width: "300px",
            height: "225px",
          },

          "@media (max-width: 786px)": {
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 9",
          },
        }}
      >
        <Image
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            mb: "4px",
          }}
        >
          <Typography
            sx={{
              color: "var(--Grey-900, #101928)",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "145%",
              whiteSpace: "nowrap",
              "@media (max-width: 768px)": {
                fontSize: "20px",
              },
            }}
          >
            {price === 0 ? (
              "Free"
            ) : (
              <>
                <span style={{ fontSize: "18px", fontWeight: 700 }}>$</span>
                {price.toFixed(2)}
              </>
            )}
          </Typography>
          {oldPrice && (
            <Typography
              sx={{
                color: "#F30",
                fontSize: "18px",
                fontWeight: 600,
                textDecoration: "line-through",
                lineHeight: "145%",
                "@media (max-width: 768px)": {
                  fontSize: "16px",
                },
              }}
            >
              ${oldPrice.toFixed(2)}
            </Typography>
          )}
        </Box>

        <Typography
          sx={{
            color: "var(--Grey-900, #101928)",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "120%",
            mb: "12px",

            "@media (max-width: 1200px)": {
              fontSize: "28px",
            },
            "@media (max-width: 768px)": {
              fontSize: "24px",
            },
            "@media (max-width: 576px)": {
              fontSize: "20px",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "var(--Grey-800, #1D2739)",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "160%",
            mb: "20px",
            maxWidth: "600px",

            "@media (max-width: 768px)": {
              fontSize: "14px",
            },
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
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            ({reviews} Reviews)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
