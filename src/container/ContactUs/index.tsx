import Hero from "@/src/components/Hero";
import { Box, Container } from "@mui/material";
import FeaturesAndLinks from "./FeaturesAndLinks";
import FAQSection from "@/src/components/FAQSection";
import ContactSection from "./ContactSection";
import { getTranslations } from "next-intl/server";

const ContactUs = async () => {
  const t = await getTranslations("Contact");

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          mb: "60px",
          overflowX: "hidden",
          "@media (max-width: 768px)": {
            gap: "50px",
            mb: "50px",
          },
          "@media (max-width: 576px)": {
            gap: "40px",
            mb: "40px",
          },
        }}
      >
        <Hero
          badgeTitle={t("heroBadge")}
          bgImagePath="/ContactUsBg.jpg"
          title={t("heroTitle")}
          description={t("heroDescription")}
        >
          <FeaturesAndLinks />
        </Hero>

        <ContactSection />

        <FAQSection />
      </Box>
    </Container>
  );
};

export default ContactUs;
