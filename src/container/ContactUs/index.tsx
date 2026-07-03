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
          badgeTitle="Help Section"
          bgImagePath="/ContactUsBg.jpg"
          title="Contact Us"
          description="Reach the 1st Forex team for account, billing, signals, course, or partnership support."
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
