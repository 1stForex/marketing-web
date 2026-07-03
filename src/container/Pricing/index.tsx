import { Box, Container } from "@mui/material";
import PricingHeader from "./PricingHeader";
import PricingSection from "./PricingSection";

const Pricing = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "34px", md: "48px" },
          mb: "80px",
          overflowX: "hidden",
          "@media (max-width: 768px)": {
            mb: "50px",
          },
          "@media (max-width: 576px)": {
            mb: "40px",
          },
        }}
      >
        <PricingHeader />
        <PricingSection />
      </Box>
    </Container>
  );
};

export default Pricing;
