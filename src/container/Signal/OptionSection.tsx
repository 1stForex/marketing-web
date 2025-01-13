import AdvertiseCard from "./AdvertiseCard";
import { allAIAssistance } from "@/src/const/allAIAssistance";
import { allTradingBot } from "@/src/const/allTradingBot";
import { allMentorship } from "@/src/const/allMentorship";
import { Box } from "@mui/material";

export default function OptionSection() {
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
    <Box>
      {cardData.map(({ title, specialText, cardInfo }, index) => (
        <AdvertiseCard
          key={index}
          title={title}
          specialText={specialText}
          cardInfo={cardInfo}
        />
      ))}
    </Box>
  );
}
