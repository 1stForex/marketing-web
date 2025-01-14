"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import StatsCard from "./StatsCard";
import Marquee from "react-fast-marquee";
import CustomButton from "@/src/components/Button";

const statsData = [
  { name: "Name", description: "Loreum Ipsum", value: 5 },
  { name: "Name", description: "Loreum Ipsum", value: -5 },
  { name: "Name", description: "Loreum Ipsum", value: 5 },
  { name: "Name", description: "Loreum Ipsum", value: -5 },
  { name: "Name", description: "Loreum Ipsum", value: 5 },
  { name: "Name", description: "Loreum Ipsum", value: -5 },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#FFF",
        py: "96px",
        borderRadius: "32px",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
        boxShadow:
          "0px 12px 16px -4px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.06)",

        "@media (max-width: 992px)": {
          py: "64px",
        },
        "@media (max-width: 576px)": {
          py: "32px",
        },
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/HeroBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          mb: "64px",
          px: "16px",
          "@media (max-width: 992px)": {
            gap: "20px",
            mb: "44px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
            mb: "24px",
          },
        }}
      >
        <Box
          sx={{
            background: "#F30",
            borderRadius: "12px",
            padding: "4px 12px",
          }}
        >
          <Image src={Logo} alt="logo" />
        </Box>

        <Typography
          sx={{
            color: "#FFF",
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-1.92px",
            maxWidth: "464px",
            textAlign: "center",
            "@media (max-width: 992px)": {
              fontSize: "38px",
            },
            "@media (max-width: 576px)": {
              fontSize: "28px",
              letterSpacing: "-0.56px",
              lineHeight: "120%",
            },
          }}
        >
          Empowering Your Trading Journey
        </Typography>

        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            textAlign: "center",

            fontSize: "24px",
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            maxWidth: "650px",
            "@media (max-width: 992px)": {
              fontSize: "20px",
            },
            "@media (max-width: 576px)": {
              fontSize: "14px",
              lineHeight: "145%",
              letterSpacing: "0",
            },
          }}
        >
          Gain the confidence, knowledge, and support you need to thrive in the
          global forex markets.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <CustomButton variant="red">Label</CustomButton>
          <CustomButton variant="transparent">Label</CustomButton>
        </Box>
      </Box>

      <Marquee>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {statsData.map((data, index) => (
            <StatsCard
              key={index}
              name={data.name}
              description={data.description}
              value={data.value}
            />
          ))}
        </Box>
      </Marquee>
    </Box>
  );
};

export default HeroSection;
