export interface FAQQuestionProps {
  question: string;
  answer: string;
  topic?: string;
  ordered?: boolean;
  points?: string[];
  subDescription?: string;
  extra?: {
    description: string;
    points: string[];
  };
}
