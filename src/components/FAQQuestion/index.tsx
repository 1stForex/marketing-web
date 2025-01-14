"use client";
import { FAQQuestionProps } from "@/src/types/FAQQuestion.interface";
import { Box, Divider, Typography } from "@mui/material";

const FAQQuestion: React.FC<FAQQuestionProps> = ({ question, answer }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Typography
        sx={{
          color: "var(--Grey-900, #333)",

          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "-0.48px",
          "@media (max-width: 768px)": {
            fontSize: "22px",
          },
          "@media (max-width: 576px)": {
            fontSize: "20px",
          },
        }}
      >
        {question}
      </Typography>
      <Divider />
      <Typography
        sx={{
          color: "var(--Shade-Black, #000)",

          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "145%",
          "@media (max-width: 768px)": {
            fontSize: "16px",
          },
          "@media (max-width: 576px)": {
            fontSize: "12px",
          },
        }}
      >
        {answer}
      </Typography>
    </Box>
  );
};

export default FAQQuestion;
