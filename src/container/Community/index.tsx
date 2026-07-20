import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import OfferSection from "./OfferSection";
import Offer from "@/src/components/Offer";
import JoinSection from "./JoinSection";
import communityMobile from "@/src/assets/images/mobile-community.png";
import { useTranslations } from "next-intl";

export default function Community() {
  const t = useTranslations("Community");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        overflowX: "hidden",
        mb: "80px",
        "@media (max-width: 768px)": {
          gap: "60px",
          mb: "60px",
        },

        "@media (max-width: 576px)": {
          gap: "40px",
          mb: "0px",
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

            "@media (max-width: 768px)": {
              gap: "40px",
            },
          }}
        >
          <HeroSection />
          <OfferSection />
        </Box>
      </Container>
      <Offer
        badgeTitle={t("how.badge")}
        title={t("how.title")}
        specialTitle={t("how.highlight")}
        points={[
          t("how.point1"),
          t("how.point2"),
        ]}
        imageUrl={communityMobile.src}
      />
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",

            "@media (max-width: 768px)": {
              gap: "40px",
            },
          }}
        >
          <JoinSection />
        </Box>
      </Container>
    </Box>
  );
}
