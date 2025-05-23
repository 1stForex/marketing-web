import { Box, Container, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Stocks from "./Stocks";
import Vision from "./Vision";
import FAQSection from "../../components/FAQSection";
import Banner from "@/src/components/Banner";
import OurStory from "./OurStory";
import Carousel from "@/src/components/Carousel";
import { homeKeyOfferingsCardData } from "@/src/const/homeKeyOfferingsCardData";

const Home = () => {
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
            gap: "80px",
            "@media (max-width: 768px)": {
              gap: "60px",
            },
            "@media (max-width: 576px)": {
              gap: "40px",
            },
          }}
        >
          <HeroSection />
          <Overview />
          <Stocks />
          <Carousel
            badgeTitle="Offers"
            cards={homeKeyOfferingsCardData}
            isCarousel={false}
          >
            <Typography
              sx={{
                color: "var(--Grey-900, #333)",
                textAlign: "center",

                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "-1.92px",
                "@media (max-width: 768px)": {
                  fontSize: "40px",
                  letterSpacing: "-1.28px",
                  textAlign: "center",
                },
                "@media (max-width: 576px)": {
                  fontSize: "26px",
                  letterSpacing: "-0.64px",
                },
              }}
            >
              Key{" "}
              <span style={{ color: "var(--primary-400-base, #F30)" }}>
                Offerings
              </span>
            </Typography>
          </Carousel>
        </Box>
      </Container>
      <Box
        sx={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 51.5%, rgba(102, 102, 102, 0.50) 100%), 
                        url('/VisionBg.png') lightgray -45px -234.526px / 104.112% 212.292% no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Vision />
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
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
          <OurStory />
          <FAQSection />
        </Box>
      </Container>

      <Box
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/HomeHeroBg.jpg')`,
          boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Banner
          badgeTitle="Welcome"
          description="For over twenty years, 1st Forex has helped traders worldwide develop profitable strategies and achieve their financial goals."
          secondaryDescription="From comprehensive courses to powerful trading signals and a vibrant community, we offer the tools, insights, and expertise to elevate your trading experience."
        >
          <Typography
            sx={{
              color: "var(--Shade-White, #FFF)",
              textAlign: "center",

              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "100%",
              letterSpacing: "-1.92px",
              "@media (max-width: 768px)": {
                fontSize: "40px",
                letterSpacing: "-1.28px",
                textAlign: "center",
              },
              "@media (max-width: 576px)": {
                fontSize: "26px",
                letterSpacing: "-0.64px",
              },
            }}
          >
            Welcome to{" "}
            <span style={{ color: "var(--primary-400-base, #F30)" }}>
              1st Forex
            </span>
          </Typography>
        </Banner>
      </Box>
    </Box>
  );
};

export default Home;
