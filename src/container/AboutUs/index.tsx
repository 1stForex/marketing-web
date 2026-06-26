import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MissionSection from "./MissionSection";
import BannerSection from "./BannerSection";
import LegacySection from "./LegacySection";

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        overflowX: "hidden",

        "@media (max-width: 768px)": {
          gap: "60px",
        },

        "@media (max-width: 576px)": {
          gap: "40px",
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
        >
          <HeroSection />
          <AboutSection />
        </Box>
      </Container>
      <MissionSection />
      <BannerSection />
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            mb: "80px",

            "@media (max-width: 576px)": {
              mb: "40px",
            },
          }}
        >
          <LegacySection />
        </Box>
      </Container>
    </Box>
  );
}
