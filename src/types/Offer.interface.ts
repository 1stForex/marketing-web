export interface OfferProps {
  badgeTitle?: string;
  title: string;
  specialTitle: string;
  description?: string;
  moreDescription?: string;
  descriptionWidth?: number;
  subDescription?: string;
  buttonText?: string;
  points?: string[];
  onClick?: () => void;
}
