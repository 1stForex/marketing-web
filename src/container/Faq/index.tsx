import Hero from "@/src/components/Hero";
import { Box, Container } from "@mui/material";
import FeaturesSection from "../../components/FeaturesSection";
import AllFAQs from "./AllFAQs";
import { faqFeaturesData } from "@/src/const/faqFeaturesData";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("Faq");
  const features = faqFeaturesData.map((feature, index) => ({
    ...feature,
    title: index === 1 ? feature.title : t(`features.${index}.title`),
    description: t(`features.${index}.description`),
  }));
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          gap: "60px",
          mb: "120px",
          "@media (max-width: 768px)": {
            gap: "50px",
            mb: "80px",
          },
          "@media (max-width: 576px)": {
            gap: "40px",
            mb: "40px",
          },
        }}
      >
        <Hero
          badgeTitle={t("badge")}
          bgImagePath="/FaqSupportBg.jpg"
          title={t("title")}
        >
          <FeaturesSection features={features} />
        </Hero>

        <AllFAQs />
      </Box>
    </Container>
  );
};

export default Faq;
