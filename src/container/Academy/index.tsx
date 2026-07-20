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
import { useTranslations } from "next-intl";

const Academy = () => {
  const t = useTranslations("Academy");
  const whyUsCards = whyUsCardsData.map(({ key, image }) => ({
    image,
    title: t(`why.cards.${key}.title`),
    description: t(`why.cards.${key}.description`),
  }));

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
            badgeTitle={t("badge")}
            bgImagePath="/HomeHeroBg.jpg"
            title={t("title")}
            description={t("description")}
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
            badgeTitle={t("why.badge")}
            headerLeft
            cards={whyUsCards}
            isCarousel
          >
            <HeadTypography color="#333">
              {t("why.start")}{" "}
              <span style={{ color: "var(--primary-400-base, #F30)" }}>
                {t("why.highlight")}
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
