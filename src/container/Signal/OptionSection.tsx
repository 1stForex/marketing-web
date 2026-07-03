"use client";
import AdvertiseCard from "./AdvertiseCard";
import { allAIAssistance } from "@/src/const/allAIAssistance";
import { allTradingBot } from "@/src/const/allTradingBot";
import { allMentorship } from "@/src/const/allMentorship";
import { Box } from "@mui/material";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Badge from "@/src/components/Badge";
import HeadTypography from "@/src/styled/HeadTypography";

export default function OptionSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cardData = [
    {
      title: "Rules-Based",
      specialText: "Signal Process",
      cardInfo: allTradingBot,
    },
    {
      title: "Personal Trader",
      specialText: "Mentorship",
      cardInfo: allMentorship,
    },
    {
      title: "App-Based Signals with",
      specialText: "Trader Support",
      cardInfo: allAIAssistance,
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
        <HeadTypography color="#333" textAlign={"center"}>
          Signal{" "}
          <span style={{ color: " var(--primary-400-base, #F30)" }}>
            Plans
          </span>
        </HeadTypography>
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
