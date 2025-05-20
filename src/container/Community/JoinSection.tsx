"use client";
import { Box, Typography } from "@mui/material";
import Logo from "@/src/assets/icons/logo.svg";
import Image from "next/image";
import CustomButton from "@/src/components/Button";

const CommunityBanner = () => {
  return (
    <Box
      sx={{
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "-5px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        padding: "80px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "24px",
        "@media (max-width: 768px)": {
          gap: "20px",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
          padding: "36px 6px",
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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "679px",
          "@media (max-width: 768px)": {
            gap: "14px",
          },
          "@media (max-width: 576px)": {
            gap: "12px",
          },
        }}
      >
        <Typography
          sx={{
            color: "var(--Shade-Black, #000)",
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          Your Voice, Your Community
        </Typography>

        <Typography
          sx={{
            color: "var(--Shade-Black, #000)",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "120%",
            letterSpacing: "-0.4px",
            "@media (max-width: 768px)": {
              fontSize: "18px",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
            },
          }}
        >
          Whether you&apos;re here to learn, share, or grow, the 1st Forex
          Community is the perfect place to connect with like-minded individuals
          and take your trading to the next level.
        </Typography>

        <CustomButton>Join Us Now</CustomButton>
      </Box>
    </Box>
  );
};

export default CommunityBanner;
