"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import FAQQuestion from "../FAQQuestion";
import CustomButton from "@/src/components/Button";
import { useRouter } from "next/navigation";

const FAQSection = () => {
  const router = useRouter();

  const handleReadFAQNavigation = () => {
    router.push("/faq");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px",
        "@media (max-width: 576px)": {
          gap: "32px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          "@media (max-width: 992px)": {
            gap: "20px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
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
            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              lineHeight: "120%",
              letterSpacing: "-0.64px",
            },
          }}
        >
          FAQ&#39;s
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          "@media (max-width: 768px)": {
            gap: "16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "32px",
            width: "100%",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "16px",
            },
          }}
        >
          <FAQQuestion
            question="What is a Limit Order?"
            answer="A limit order is an order with restrictions on the maximum price to be paid or the minimum price to be received. For example, if the current price of USD/JPY is 117.00/05, a limit order to buy USD would be set at a price below 117.00 (e.g., 116.50)."
          />
          <FAQQuestion
            question="What is a Stop Loss Order?"
            answer="A stop loss order is a type of order where an open position is automatically liquidated at a specified price. It is often used to minimize exposure to losses if the market moves against the investor's position. For example, if an investor is long on USD at 156.27, they might place a stop loss order at 155.49 to limit losses should the dollar depreciate below this level."
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "32px",
            width: "100%",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "16px",
            },
          }}
        >
          <FAQQuestion
            question="What is a Position Order?"
            answer="Position orders are directly tied to individual positions and remain active only as long as the position is open. These orders can include stop loss or limit orders to manage risk and secure profits."
          />
          <FAQQuestion
            question="What is Foreign Exchange?"
            answer='The Foreign Exchange market, commonly referred to as the "Forex" market, is the largest financial market in the world, with a daily average turnover exceeding US$7.5 trillion as of recent estimates. Forex involves the simultaneous buying of one currency and selling of another. Currencies are traded in pairs, such as EUR/USD or USD/JPY.'
          />
        </Box>
      </Box>

      <CustomButton onClick={handleReadFAQNavigation}>
        Read more FAQ&#39;s
      </CustomButton>
    </Box>
  );
};

export default FAQSection;
