import { BadgeProps } from "./Badge.interface";

export interface PricingCardProps {
  variant?: "white" | "black";
  badgeProps: BadgeProps;
  price: string;
  btnLabel: string;
  btnOnClick?: () => void;
  features: string[];
}
