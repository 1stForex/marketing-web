"use client";
import { styled, Typography } from "@mui/material";

const OverviewBaseTypography = styled(Typography)(() => ({
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
}));

export default OverviewBaseTypography;
