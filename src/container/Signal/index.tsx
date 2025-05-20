import { Box, Container } from "@mui/material";
import Overview from "./Overview";
import HeroSection from "./HeroSection";
import BannerSection from "./BannerSection";
import OptionSection from "./OptionSection";
import Offer from "@/src/components/Offer";
import KeyOfferings from "./KeyOfferings";

export default function Signal() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",

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
            overflowX: "hidden",

            "@media (max-width: 768px)": {
              gap: "40px",
            },
          }}
        >
          <HeroSection />
          <Overview />
          <KeyOfferings />
        </Box>
      </Container>
      <Offer
        badgeTitle="Offers"
        title="What"
        specialTitle="We Offer"
        description="At 1st Forex AI Signal, our AI-powered app seamlessly blends decades of market experience with real-time data analysis, creating an almost perfect trading environment. With 20 years of backtesting, every signal we send is both thoroughly tested and dynamically refined to respond to the market’s changing conditions. "
      />
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            mb: "80px",

            "@media (max-width: 768px)": {
              gap: "40px",
              mb: "60px",
            },
          }}
        >
          <OptionSection />
        </Box>
      </Container>
      <BannerSection />
    </Box>
  );
}
