import { MotionValue } from "framer-motion";
import { OptionCardProp } from "./OptionCard.interface";

export interface AdvertiseCardProps {
  title: string;
  specialText: string;
  cardInfo: OptionCardProp[];
  index: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}
