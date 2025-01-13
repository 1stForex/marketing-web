"use client";

import { allLegacy } from "@/src/const/allLegacy";
import Badge from "@/src/components/Badge";
import OptionCard from "@/src/components/OptionCard";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

export default function LegacySection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "31px",
        alignItems: "center",
        padding: "48px",
        borderRadius: "32px",
        background: "#F9FAFB",
        boxShadow:
          "-5px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "573px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <Badge title="Our Story" />
          <Typography
            sx={{
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "100%",
              letterSpacing: "-1.92px",
              color: "#000",
            }}
          >
            A Legacy of Excellence
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%",
            letterSpacing: "-0.4px",
          }}
        >
          Behind 1st Forex is a dynamic and diverse team of forex veterans,
          successful young traders, and AI specialists. This unique blend of
          experience and innovation allows us to stay ahead of market trends and
          deliver unmatched value to our community
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          maxWidth: "533px", // Set max-width for the slider container
        }}
      >
        <Slider {...settings}>
          {allLegacy.map((item, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: "24px", // Add space between cards
              }}
            >
              <OptionCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
