"use client";
import { styled, Typography } from "@mui/material";

const HeadTypography = styled(Typography)(() => ({
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "100%",
  letterSpacing: "-1.92px",

  "@media (max-width: 768px)": {
    fontSize: "40px",
    letterSpacing: "-1.28px",
    textAlign: "center",
  },
  "@media (max-width: 576px)": {
    fontSize: "26px",
    letterSpacing: "-0.64px",
  },
}));

export default HeadTypography;
