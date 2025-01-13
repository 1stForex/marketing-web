import { CardProps } from "./Card.interface";

export interface CarouselProp {
  headerLeft?: boolean;
  badgeTitle: string;
  cards: CardProps[];
  isCarousel?: boolean;
  children: React.ReactNode;
}
