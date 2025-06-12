"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Certificate from "@/src/assets/images/certificate.png";
import HeadTypography from "@/src/styled/HeadTypography";

const UniqueApproach = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",

        "@media (max-width: 992px)": {
          justifyContent: "center",
          gap: "0px",
        },

        "@media (max-width: 768px)": {
          padding: "40px",
        },

        "@media (max-width: 576px)": {
          padding: "16px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",

          "@media (max-width: 768px)": {
            alignItems: "center",
          },
        }}
      >
        <Badge title="Our Story" />

        <HeadTypography
          sx={{
            mb: "24px",
            mt: "21px",
            color: "var(--Grey-900, #333)",
            maxWidth: "464px",
            "@media (max-width: 992px)": {
              maxWidth: "100%",
            },
          }}
        >
          Our Unique Approach
        </HeadTypography>

        <Box
          sx={{
            maxWidth: "498px",
            "@media (max-width: 768px)": {
              maxWidth: "100%",
            },
          }}
        >
          <Typography
            sx={{
              color: "var(--Shade-Black, #000)",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-0.4px",
              mb: "32px",

              "@media (max-width: 768px)": {
                fontSize: "18px",
                mb: "28px",
                textAlign: "center",
              },

              "@media (max-width: 576px)": {
                fontSize: "16px",
                mb: "24px",
              },
            }}
          >
            What sets us apart is our ability to blend tradition with
            innovation. While our course content is rooted in tried-and-true
            strategies we&#39;ve honed since 2004, we&#39;ve integrated advanced
            AI technology to enhance the learning experience.
          </Typography>

          <Typography
            sx={{
              color: "var(--Shade-Black, #000)",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-0.4px",

              "@media (max-width: 768px)": {
                fontSize: "18px",
                textAlign: "center",
              },

              "@media (max-width: 576px)": {
                fontSize: "16px",
              },
            }}
          >
            From AI forex signals to automated trading bots, our tools
            complement your education and help you make smarter trading
            decisions.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "408px",
          aspectRatio: "1",

          "@media (max-width: 992px)": {
            display: "none",
          },
        }}
      >
        <Image
          src={Certificate}
          alt="Certification"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default UniqueApproach;
