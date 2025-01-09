import Hero from "@/src/components/Hero";
import { Box, Container } from "@mui/material";
import FeaturesSection from "./FeaturesSection";
import AllFAQs from "./AllFAQs";

const Faq = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          mb: "120px",
        }}
      >
        <Hero
          badgeTitle="Help Section"
          bgImagePath="/FaqSupportBg.jpg"
          title="FAQ & User Support"
        >
          <FeaturesSection />
        </Hero>

        <AllFAQs />
      </Box>
    </Container>
  );
};

export default Faq;
