"use client";
import { Box, Typography } from "@mui/material";
import Logo from "@/src/assets/icons/logo.svg";
import Image from "next/image";

const Overview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "130px",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
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
          fontSize: "32px",
          fontWeight: 600,
          lineHeight: "120%",
          letterSpacing: "-0.64px",
          color: "var(--Grey-600, #475367)",
          "@media (max-width: 768px)": {
            fontSize: "24px",
            textAlign: "center",
          },
          "@media (max-width: 576px)": {
            fontSize: "16px",
            lineHeight: "145%",
          },
        }}
      >
        For over twenty years, 1st Forex has helped traders worldwide develop
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          {" "}
          profitable strategies{" "}
        </span>
        and achieve their financial goals.
        <Box
          component={"span"}
          sx={{
            display: "none",
            "@media (max-width: 768px)": {
              display: "inline",
              minHeight: "24px",
            },
          }}
        >
          <br />
          <span style={{ display: "block", marginTop: "12px" }}></span>
        </Box>{" "}
        From comprehensive courses to
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          {" "}
          powerful trading{" "}
        </span>
        signals and a vibrant community, we offer the tools, insights, and
        expertise to
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          {" "}
          elevate{" "}
        </span>
        your trading experience.
      </Typography>
    </Box>
  );
};

export default Overview;
