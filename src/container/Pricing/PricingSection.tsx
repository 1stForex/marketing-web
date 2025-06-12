"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import DetailPricingCard from "./DetailPricingCard";
import {
  fourPairFeatures,
  twoPairFeatures,
  unlimitedPairFeatures,
} from "@/src/const/pricingPlanFeatures";
import ToggleBtn from "@/src/components/ToggleBtn";

const pricing = {
  monthly: {
    twoPair: "22.99",
    fourPair: "59.99",
    unlimitedPair: "89.99",
    btnText: "Subscribe Monthly",
  },
  yearly: {
    twoPair: {
      pricing: "20.83",
      billing: "249.99",
      freeSave: {
        month: "1",
        save: "26",
      },
    },
    fourPair: {
      pricing: "50.00",
      billing: "599.99",
      freeSave: {
        month: "2",
        save: "120",
      },
    },
    unlimitedPair: {
      pricing: "65.83",
      billing: "789.99",
      freeSave: {
        month: "3",
        save: "290",
      },
    },
    btnText: "Subscribe Yearly",
  },
};

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = React.useState(true);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          position: "relative",
          left: "75px",

          "@media (max-width: 576px)": {
            position: "static",
            left: "0",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "12px" }}>
          <Typography>Monthly</Typography>
          <ToggleBtn onChange={() => setIsMonthly(!isMonthly)} />
          <Typography>Yearly</Typography>
        </Box>
        <Box
          sx={{
            padding: "2px 12px",
            borderRadius: "12px",
            background: "#E7F6EC",
            border: "1px solid #91D6A8",
            visibility: isMonthly ? "hidden" : "visible",
          }}
        >
          <Typography
            sx={{
              color: "#0F973D",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "145%",
            }}
          >
            Save up to $275
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "28px",
          padding: "80px 48px",
          borderRadius: "32px",
          background: "var(--Grey-50, #F9FAFB)",
          boxShadow:
            "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
          "@media (max-width: 1000px)": {
            padding: "40px 24px",
          },
          "@media (max-width: 920px)": {
            flexDirection: "column",
            padding: "32px 16px",
          },
          "@media (max-width: 768px)": {
            gap: "24px ",
          },
          "@media (max-width: 576px)": {
            padding: "12px",
            gap: "16px",
          },
        }}
      >
        <DetailPricingCard
          badgeProps={{ title: "2 Pairs", variant: "grey" }}
          subText="Get the Signals triggered by our system for your selected 2 pairs."
          price={
            isMonthly ? pricing.monthly.twoPair : pricing.yearly.twoPair.pricing
          }
          billing={isMonthly ? undefined : pricing.yearly.twoPair.billing}
          freeSave={isMonthly ? undefined : pricing.yearly.twoPair.freeSave}
          features={twoPairFeatures}
        />
        <DetailPricingCard
          badgeProps={{ title: "4 Pairs", variant: "grey" }}
          subText="Get the Signals triggered by our system for your selected 4 pairs. "
          price={
            isMonthly
              ? pricing.monthly.fourPair
              : pricing.yearly.fourPair.pricing
          }
          billing={isMonthly ? undefined : pricing.yearly.fourPair.billing}
          freeSave={isMonthly ? undefined : pricing.yearly.fourPair.freeSave}
          features={fourPairFeatures}
          isPopular
        />
        <DetailPricingCard
          badgeProps={{ title: "Unlimited", variant: "black" }}
          subText="Get ALL the Royals registered by our system for ALL pairs."
          price={
            isMonthly
              ? pricing.monthly.unlimitedPair
              : pricing.yearly.unlimitedPair.pricing
          }
          billing={isMonthly ? undefined : pricing.yearly.unlimitedPair.billing}
          freeSave={
            isMonthly ? undefined : pricing.yearly.unlimitedPair.freeSave
          }
          features={unlimitedPairFeatures}
        />
      </Box>
    </Box>
  );
};

export default PricingSection;
