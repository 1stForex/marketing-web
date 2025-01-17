"use client";
import { FAQQuestionProps } from "@/src/types/FAQQuestion.interface";
import { Box, Divider, Typography } from "@mui/material";

const FAQQuestion: React.FC<FAQQuestionProps> = ({
  question,
  answer,
  ordered = false,
  points = [],
  subDescription,
  extra,
}) => {
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
      {points?.length > 0 && (
        <Box component={ordered ? "ol" : "ul"} sx={{ paddingLeft: "40px" }}>
          {points.map((item, index) => (
            <Typography
              component={"li"}
              key={index}
              sx={{
                color: "#000",
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
              {item}
            </Typography>
          ))}
        </Box>
      )}
      {extra && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              color: "#000",
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
            {extra.description}
          </Typography>
          {extra.points?.length > 0 && (
            <Box component="ul">
              {extra.points.map((item, index) => (
                <Typography
                  component={"li"}
                  key={index}
                  sx={{
                    color: "#000",
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
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      )}
      {subDescription && (
        <Typography
          sx={{
            color: "#000",
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
          {subDescription}
        </Typography>
      )}
    </Box>
  );
};

export default FAQQuestion;
