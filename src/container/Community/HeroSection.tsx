import Badge from "@/src/components/Badge";
import BaseTypography from "@/src/styled/BaseTypography";
import HeadTypography from "@/src/styled/HeadTypography";
import { Box } from "@mui/material";

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

        <HeadTypography color="#FFF" textAlign={"center"} maxWidth={"734px"}>
          Welcome to the 1st Forex Community
        </HeadTypography>

        <BaseTypography color="#FFF" fontWeight={400} maxWidth={"842px"}>
          A place where forex traders of all levels come together as a “family”
          to learn, grow, and support one another. Whether you’re just starting
          out or a seasoned professional, our community is designed to help you
          achieve success in your trading journey.
        </BaseTypography>
        <BaseTypography color="#FFF" fontWeight={400} maxWidth={"842px"}>
          Whether you’re just starting out or a seasoned professional, our
          community is designed to help you achieve success in your trading
          journey.
        </BaseTypography>
      </Box>
    </Box>
  );
}
