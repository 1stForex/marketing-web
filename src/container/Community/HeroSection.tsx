import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#FFF",
        minHeight: "465px",
        height: "100%",
        py: "96px",
        borderRadius: "32px",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        "@media (max-width: 992px)": {
          py: "64px",
        },
        "@media (max-width: 576px)": {
          py: "32px",
        },
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/HeroBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          px: "16px",
          "@media (max-width: 768px)": {
            gap: "20px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        <Badge title="Community" />

        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            maxWidth: "734px",
            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          Welcome to the 1st Forex Community
        </Typography>

        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            maxWidth: "842px",
            "@media (max-width: 768px)": {
              fontSize: "20px",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
              letterSpacing: "-0.32px",
            },
          }}
        >
          A place where forex traders of all levels come together as a “family”
          to learn, grow, and support one another. Whether you’re just starting
          out or a seasoned professional, our community is designed to help you
          achieve success in your trading journey.
        </Typography>
      </Box>
    </Box>
  );
}
