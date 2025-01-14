import Hero from "@/src/components/Hero";
import { Box, Container } from "@mui/material";
import FeaturesSection from "../../components/FeaturesSection";
import AllFAQs from "./AllFAQs";
import { faqFeaturesData } from "@/src/const/faqFeaturesData";

const Faq = () => {
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
          badgeTitle="Help Section"
          bgImagePath="/FaqSupportBg.jpg"
          title="FAQ & User Support"
        >
          <FeaturesSection features={faqFeaturesData} />
        </Hero>

        <AllFAQs />
      </Box>
    </Container>
  );
};

export default Faq;
