import Hero from "@/src/components/Hero";
import { Box, Container, Typography } from "@mui/material";
import CtaSection from "./CtaSection";
import VisionBanner from "./VisionBanner";
import AboutUs from "./AboutUs";
import Carousel from "@/src/components/Carousel";
import { whyUsCardsData } from "@/src/const/whyUsCardsData";
import Courses from "./Cousrses";
import UniqueApproach from "./UniqueApproach";

const Academy = () => {
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
          <Hero
            badgeTitle="Trading Academy"
            bgImagePath="/HomeHeroBg.jpg"
            title="Your Gateway to Forex Success"
            description="Since 2004, 1st Forex Trading Academy has been empowering traders worldwide with top-tier forex education. Whether you're an aspiring trader starting from scratch or a seasoned professional seeking to refine your strategies, our comprehensive, interactive courses are designed to elevate your trading journey."
          >
            <CtaSection />
          </Hero>

          <AboutUs />
        </Box>
      </Container>

      <VisionBanner />

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
          <Carousel
            badgeTitle="Why us"
            headerLeft
            cards={whyUsCardsData}
            isCarousel
          >
            <Typography
              sx={{
                color: "var(--Grey-900, #333)",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "-1.92px",
              }}
            >
              Why{" "}
              <span style={{ color: "var(--primary-400-base, #F30)" }}>
                Choose Us?
              </span>
            </Typography>
          </Carousel>

          <Courses />

          <UniqueApproach />
        </Box>
      </Container>
    </Box>
  );
};

export default Academy;
