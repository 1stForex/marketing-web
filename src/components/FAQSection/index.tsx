"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import FAQQuestion from "../FAQQuestion";
import CustomButton from "@/src/components/Button";

const FAQSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Badge title="Knowledge Base" />

        <Typography
          sx={{
            color: "var(--Grey-900, #333)",
            textAlign: "center",

            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
          }}
        >
          FAQ's
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "32px",
            width: "100%",
          }}
        >
          <FAQQuestion
            question="What is a Limit Order?"
            answer="A limit order is an order with restrictions on the maximum price to be paid or the minimum price to be received. For example, if the current price of USD/JPY is 117.00/05, a limit order to buy USD would be set at a price below 117.00 (e.g., 116.50)."
          />
          <FAQQuestion
            question="What is a Limit Order?"
            answer="A limit order is an order with restrictions on the maximum price to be paid or the minimum price to be received. For example, if the current price of USD/JPY is 117.00/05, a limit order to buy USD would be set at a price below 117.00 (e.g., 116.50). "
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "32px",
            width: "100%",
          }}
        >
          <FAQQuestion
            question="What is a Limit Order?"
            answer="A limit order is an order with restrictions on the maximum price to be paid or the minimum price to be received. For example, if the current price of USD/JPY is 117.00/05, a limit order to buy USD would be set at a price below 117.00 (e.g., 116.50)."
          />
          <FAQQuestion
            question="What is a Limit Order?"
            answer="A limit order is an order with restrictions on the maximum price to be paid or the minimum price to be received. For example, if the current price of USD/JPY is 117.00/05, a limit order to buy USD would be set at a price below 117.00 (e.g., 116.50)."
          />
        </Box>
      </Box>

      <CustomButton>Read more FAQ's</CustomButton>
    </Box>
  );
};

export default FAQSection;
