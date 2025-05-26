import { Box, Typography } from "@mui/material";
import Logo from "@/src/assets/icons/logo.svg";
import Image from "next/image";

export default function Overview() {
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
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            color: "#333",
            mb: "12px",
            "@media (max-width: 768px)": {
              fontSize: "20px",
              textAlign: "center",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
              letterSpacing: "-0.32px",
            },
          }}
        >
          1st Forex AI Signal merges
          <span style={{ color: "#F30" }}> 20 years </span> of market expertise
          with our copyrighted{" "}
          <span style={{ color: "#F30" }}>Break Out System</span>, enhanced by
          cutting-edge AI to deliver superior trading results.
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            color: "#333",
            mb: "12px",
            "@media (max-width: 768px)": {
              fontSize: "20px",
              textAlign: "center",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
              letterSpacing: "-0.32px",
            },
          }}
        >
          Our advanced algorithms analyze real-time data, adapt to evolving
          trends, and provide reliable, automated signals directly to your
          mobile app ensuring exceptional ROI and effortless execution.
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            color: "#333",

            "@media (max-width: 768px)": {
              fontSize: "20px",
              textAlign: "center",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
              letterSpacing: "-0.32px",
            },
          }}
        >
          With <span style={{ color: "#F30" }}>24/7 support</span>, direct
          access to an experienced trading team, and a thriving forex community
          by your side, professional-grade trading has never been more
          accessible.
        </Typography>
      </Box>
    </Box>
  );
}
