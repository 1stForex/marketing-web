"use client";

import { Box, Divider } from "@mui/material";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";
import CompanyInfo from "./CompanyInfo";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#F9FAFB",
        padding: "80px 112px",

        "@media (max-width: 992px)": {
          padding: "40px",
        },

        "@media (max-width: 768px)": {
          padding: "40px 20px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          Width: "100%",
        }}
      >
        <NewsLetter />
        <Divider
          sx={{
            width: "100%",
            borderColor: "#F0F2F5",
            borderWidth: "1px",
            marginY: 2,

            "@media (max-width: 768px)": {
              marginY: "24px",
            },
          }}
        />
        <FooterLinks />
        <Divider
          sx={{
            width: "100%",
            borderColor: "#F0F2F5",
            borderWidth: "1px",
            marginY: 2,

            "@media (max-width: 768px)": {
              marginY: "24px",
            },
          }}
        />
        <CompanyInfo />
      </Box>
    </Box>
  );
}
