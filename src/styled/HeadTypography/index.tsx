"use client";
import { styled, Typography } from "@mui/material";

const HeadTypography = styled(Typography)(() => ({
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "112%",
  letterSpacing: "0",

  "@media (max-width: 768px)": {
    fontSize: "38px",
    textAlign: "center",
  },
  "@media (max-width: 576px)": {
    fontSize: "28px",
    lineHeight: "116%",
  },
}));

export default HeadTypography;
