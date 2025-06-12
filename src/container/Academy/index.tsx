import Hero from "@/src/components/Hero";
import { Box, Container } from "@mui/material";
import CtaSection from "./CtaSection";
import VisionBanner from "./VisionBanner";
import AboutUs from "./AboutUs";
import Carousel from "@/src/components/Carousel";
import { whyUsCardsData } from "@/src/const/whyUsCardsData";
import Courses from "./Cousrses";
import UniqueApproach from "./UniqueApproach";
import HeadTypography from "@/src/styled/HeadTypography";
import OfferSection from "./OfferSection";

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
            overflowX: "hidden",
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
            overflowX: "hidden",
          }}
        >
          <Carousel
            badgeTitle="Why us"
            headerLeft
            cards={whyUsCardsData}
            isCarousel
          >
            <HeadTypography color="#333">
              Why{" "}
              <span style={{ color: "var(--primary-400-base, #F30)" }}>
                Choose Us?
              </span>
            </HeadTypography>
          </Carousel>

          <Courses />

          <UniqueApproach />
        </Box>
      </Container>
      <OfferSection />
    </Box>
  );
};

export default Academy;
