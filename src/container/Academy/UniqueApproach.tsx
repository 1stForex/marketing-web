"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Bull from "@/src/assets/images/Bull.png";

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Badge title="Our Story" />

        <Typography
          sx={{
            mb: "24px",
            mt: "21px",
            color: "var(--Grey-900, #333)",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            maxWidth: "464px",
          }}
        >
          Our Unique Approach
        </Typography>

        <Box
          sx={{
            maxWidth: "498px",
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
        }}
      >
        <Image
          src={Bull}
          alt="Bull"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Box>
  );
};

export default UniqueApproach;
