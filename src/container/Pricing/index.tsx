import { Box, Container } from "@mui/material";
import PricingHeader from "./PricingHeader";
// import PricingPlanSection from "./PricingPlanSection";
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
          gap: "60px",
          mb: "80px",
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
        <PricingHeader />
        <PricingSection />
        {/* <PricingPlanSection /> */}
      </Box>
    </Container>
  );
};

export default Pricing;
