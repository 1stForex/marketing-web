import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Stocks from "./Stocks";
import Vision from "./Vision";
import FAQSection from "../../components/FAQSection";
import Banner from "@/src/components/Banner";
import OurStory from "./OurStory";
import Carousel from "@/src/components/Carousel";
import HeadTypography from "@/src/styled/HeadTypography";
import { getTranslations } from "next-intl/server";
import Leader from "@/src/assets/icons/Leader.svg";
import Care from "@/src/assets/icons/Care.svg";
import UpDownArrows from "@/src/assets/icons/UpDownArrows.svg";

const Home = async () => {
  const t = await getTranslations("Home");
  const offeringCards = [
    {
      title: t("offerings.trainingTitle"),
      image: Leader,
      description: t("offerings.trainingDescription"),
    },
    {
      title: t("offerings.signalsTitle"),
      image: Care,
      description: t("offerings.signalsDescription"),
    },
    {
      title: t("offerings.communityTitle"),
      image: UpDownArrows,
      description: t("offerings.communityDescription"),
    },
  ];
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
            badgeTitle={t("offerings.badge")}
            cards={offeringCards}
            isCarousel={false}
          >
            <HeadTypography color="#333" textAlign={"center"}>
              {t.rich("offerings.title", {
                accent: (chunks) => (
                  <span style={{ color: "var(--primary-400-base, #F30)" }}>
                    {chunks}
                  </span>
                ),
              })}
            </HeadTypography>
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
          badgeTitle={t("welcome.badge")}
          description={t("welcome.description")}
          secondaryDescription={t("welcome.secondaryDescription")}
        >
          <HeadTypography color="#FFF" textAlign={"center"}>
            {t.rich("welcome.title", {
              accent: (chunks) => (
                <span style={{ color: "var(--primary-400-base, #F30)" }}>
                  {chunks}
                </span>
              ),
            })}
          </HeadTypography>
        </Banner>
      </Box>
    </Box>
  );
};

export default Home;
