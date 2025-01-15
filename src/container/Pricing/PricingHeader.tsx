"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";

const PricingHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        "@media (max-width: 768px)": {
          gap: "20px",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
        },
      }}
    >
      <Badge title="Pricing" />

      <Typography
        sx={{
          color: "var(--Grey-900, #333)",
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
        Pick the price{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          thats right for you{" "}
        </span>
      </Typography>

      <Typography
        sx={{
          color: "var(--Grey-900, #333)",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: 400,
          lineHeight: "120%",
          letterSpacing: "-0.48px",
          "@media (max-width: 768px)": {
            fontSize: "20px",
          },
          "@media (max-width: 576px)": {
            fontSize: "16px",
            letterSpacing: "-0.32px",
          },
        }}
      >
        Join millions of other customers on this platform
      </Typography>
    </Box>
  );
};

export default PricingHeader;
