import Hero from "@/src/components/Hero";
import { Box, Container } from "@mui/material";
import FeaturesAndLinks from "./FeaturesAndLinks";
import FAQSection from "@/src/components/FAQSection";
import ContactSection from "./ContactSection";

const ContactUs = () => {
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
          bgImagePath="/ContactUsBg.jpg"
          title="Contact Us"
          description="Experience fully automated, AI-powered forex signals backed by two decades of proven success."
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
