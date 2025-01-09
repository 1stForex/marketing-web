"use client";
import { Box } from "@mui/material";
import PricingCard from "./PricingCard";
import {
  basicPlanFeatures,
  freePlanFeatures,
  premiumPlanFeatures,
} from "@/src/const/pricingPlanFeatures";

const PricingPlanSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "28px",
        padding: "80px",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
      }}
    >
      <PricingCard
        badgeProps={{ title: "Free", variant: "grey" }}
        price="0.00"
        btnLabel="Sign up for Free"
        features={freePlanFeatures}
      />
      <PricingCard
        badgeProps={{ title: "Basic", variant: "black" }}
        price="19.99"
        btnLabel="Get Basic"
        features={basicPlanFeatures}
      />
      <PricingCard
        variant="black"
        badgeProps={{ title: "Premium", variant: "red" }}
        price="49.99"
        btnLabel="Go Premium"
        features={premiumPlanFeatures}
      />
    </Box>
  );
};

export default PricingPlanSection;
