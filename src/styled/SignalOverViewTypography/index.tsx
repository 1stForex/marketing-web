"use client";
import { styled, Typography } from "@mui/material";

const SignalOverViewTypography = styled(Typography)(() => ({
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
}));

export default SignalOverViewTypography;
