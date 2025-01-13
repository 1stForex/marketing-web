import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MissionSection from "./MissionSection";
import OurStory from "./OurStory";
import BannerSection from "./BannerSection";
import LegacySection from "./LegacySection";

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
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
          <OurStory />
        </Box>
      </Container>
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
          }}
        >
          <LegacySection />
        </Box>
      </Container>
    </Box>
  );
}
