"use client";

import { allLegacy } from "@/src/const/allLegacy";
import Badge from "@/src/components/Badge";
import OptionCard from "@/src/components/OptionCard";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";

export default function LegacySection() {
  const isSmallScreen = useMediaQuery(`(max-width: 992px)`);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: !isSmallScreen,
    verticalSwiping: !isSmallScreen,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          dots: false,
          slidesToShow: 2,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
        },
      },
    ],
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
        flexDirection: isSmallScreen ? "column" : "row",

        "@media (max-width: 1024px)": {
          padding: "28px",
        },

        "@media (max-width: 576px)": {
          padding: "18px 10px",
        },
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

              "@media (max-width: 768px)": {
                fontSize: "38px",
              },

              "@media (max-width: 576px)": {
                fontSize: "28px",
              },
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

            "@media (max-width: 992px)": {
              textAlign: "center",
            },

            "@media (max-width: 768px)": {
              fontSize: "20px",
            },

            "@media (max-width: 576px)": {
              fontSize: "16px",
            },
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
          width: "100%",
          maxWidth: isSmallScreen ? "100%" : "533px",
        }}
      >
        <Box
          sx={{
            margin: "0 -12px",
          }}
        >
          <Slider {...settings}>
            {allLegacy.map((item, index) => (
              <Box
                key={index}
                sx={{
                  padding: "0 12px",
                  marginBottom: isSmallScreen ? "0" : "24px",
                }}
              >
                <OptionCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  fixedSize={true}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
