"use client";
import { styled, Typography } from "@mui/material";

const AboutUsTypography = styled(Typography)(() => ({
  color: "#000",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "120%",
  letterSpacing: "-0.4px",
  "@media (max-width: 992px)": {
    textAlign: "center",
  },

  "@media (max-width: 768px)": {
    fontSize: "18px",
  },

  "@media (max-width: 576px)": {
    fontSize: "16px",
  },
}));

export default AboutUsTypography;
