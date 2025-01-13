"use client";
import AdvertiseCard from "./AdvertiseCard";
import { allAIAssistance } from "@/src/const/allAIAssistance";
import { allTradingBot } from "@/src/const/allTradingBot";
import { allMentorship } from "@/src/const/allMentorship";
import { Box, Typography } from "@mui/material";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Badge from "@/src/components/Badge";

export default function OptionSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cardData = [
    {
      title: "App-Based Signals with",
      specialText: "AI Assistance",
      cardInfo: allAIAssistance,
    },
    {
      title: "Fully Automated",
      specialText: "Trading Bot",
      cardInfo: allTradingBot,
    },
    {
      title: "Personal Trader",
      specialText: "Mentorship",
      cardInfo: allMentorship,
    },
  ];

  return (
    <Box ref={container}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "21px",
          mb: "64px",
        }}
      >
        <Badge title="Offers" />
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
          Your{" "}
          <span style={{ color: " var(--primary-400-base, #F30)" }}>
            Options
          </span>
        </Typography>
      </Box>
      {cardData.map(({ title, specialText, cardInfo }, index) => {
        const targetScale = 1 - (cardData.length - index) * 0.05;
        return (
          <AdvertiseCard
            key={index}
            index={index}
            title={title}
            specialText={specialText}
            cardInfo={cardInfo}
            range={[index * 0.33, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </Box>
  );
}
