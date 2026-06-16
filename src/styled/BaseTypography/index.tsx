"use client";
import { styled, Typography } from "@mui/material";

const BaseTypography = styled(Typography)(() => ({
  fontSize: "24px",
  lineHeight: "145%",
  letterSpacing: "0",
  textAlign: "center",

  "@media (max-width: 768px)": {
    fontSize: "20px",
  },
  "@media (max-width: 576px)": {
    fontSize: "16px",
  },
}));

export default BaseTypography;
