"use client";
import Badge from "@/src/components/Badge";
import Card from "@/src/components/Card";
import { Box, Typography } from "@mui/material";

import Leader from "@/src/assets/icons/Leader.svg";
import Care from "@/src/assets/icons/Care.svg";
import UpDownArrows from "@/src/assets/icons/UpDownArrows.svg";

const KeyOfferings = () => {
  return (
    <Box
      sx={{
        padding: "44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
      }}
    >
      <Box sx={{ mb: "21px" }}>
        <Badge title="Offers" />
      </Box>

      <Typography
        sx={{
          mb: "32px",
          color: "var(--Grey-900, #333)",
          textAlign: "center",

          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "-1.92px",
        }}
      >
        Key{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          Offerings
        </span>
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <Card
          title="Expert-Led Training"
          image={Leader}
          description="Learn time-tested strategies and market fundamentals from accomplished professionals."
        />
        <Card
          title="Advanced Signals & Strategic Insights"
          image={Care}
          description="Access reliable, AI-powered signals andintuitive market guidance that adapt to changing conditions, informing your every move."
        />
        <Card
          title="Supportive Community"
          image={UpDownArrows}
          description="Learn time-tested strategies and market fundamentals from accomplished professionals."
        />
      </Box>
    </Box>
  );
};

export default KeyOfferings;
