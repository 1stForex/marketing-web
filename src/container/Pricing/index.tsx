import { Box, Container } from "@mui/material";
import PricingHeader from "./PricingHeader";
import PricingPlanSection from "./PricingPlanSection";

const Pricing = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          mb: "80px",
        }}
      >
        <PricingHeader />
        <PricingPlanSection />
      </Box>
    </Container>
  );
};

export default Pricing;
