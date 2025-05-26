"use client";
import { styled, Typography } from "@mui/material";

const BaseTypography = styled(Typography)(() => ({
  fontSize: "24px",
  lineHeight: "120%",
  letterSpacing: "-0.48px",
  textAlign: "center",

  "@media (max-width: 768px)": {
    fontSize: "20px",
  },
  "@media (max-width: 576px)": {
    fontSize: "16px",
    letterSpacing: "-0.32px",
  },
}));

export default BaseTypography;
