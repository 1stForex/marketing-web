import Conversation from "@/src/assets/icons/Conversation.svg";
import AIPowered from "@/src/assets/icons/AIPowered.svg";
import Mentoring from "@/src/assets/icons/Mentoring.svg";
import Building from "@/src/assets/icons/Building.svg";
import Diversity from "@/src/assets/icons/Diversity.svg";

export const whyUsCardsData = [
  {
    key: "interactiveLearning",
    image: Conversation,
  },
  {
    key: "practicalSupport",
    image: AIPowered,
  },
  {
    key: "experiencedMentors",
    image: Mentoring,
  },
  {
    key: "globalCommunity",
    image: Diversity,
  },
  {
    key: "globalSeminars",
    image: Building,
  },
] as const;
