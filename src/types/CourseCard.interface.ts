import { StaticImageData } from "next/image";

export interface CourseCardProps {
  title: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  image: string | StaticImageData;
}
