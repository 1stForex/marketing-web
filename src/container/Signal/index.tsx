import { Box, Container } from "@mui/material";
import Overview from "./Overview";
import HeroSection from "./HeroSection";
import BannerSection from "./BannerSection";
import OptionSection from "./OptionSection";
import Offer from "@/src/components/Offer";
import KeyOfferings from "./KeyOfferings";
import { useTranslations } from "next-intl";

export default function Signal() {
  const t = useTranslations("Signal");
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
        badgeTitle={t("offersBadge")}
        title={t("offer.title")}
        specialTitle={t("offer.highlight")}
        description={t("offer.description")}
        secondaryDescription={t("offer.secondaryDescription")}
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
