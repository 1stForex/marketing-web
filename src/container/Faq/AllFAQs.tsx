"use client";

import { Box, Typography } from "@mui/material";
import CustomInputField from "@/src/components/CustomInputField";
import SearchGrey from "@/src/assets/icons/search-grey.svg";
import FAQQuestion from "@/src/components/FAQQuestion";
import { allQuestions } from "../../const/allQuestions";
import { useState } from "react";

const AllFAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = allQuestions.filter((question) =>
    question.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        "@media (max-width: 768px)": {
          gap: "30px",
        },
        "@media (max-width: 576px)": {
          gap: "20px",
        },
      }}
    >
      <CustomInputField
        placeholder="What do you need help with?"
        icon={SearchGrey}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Box>
        <Typography
          sx={{
            color: "var(--Shade-Black, #000)",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            mb: "60px",
            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
              mb: "32px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              lineHeight: "120%",
              letterSpacing: "-0.64px",
              mb: "28px",
            },
          }}
        >
          All FAQ&#39;s
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question, index) => (
              <FAQQuestion
                question={question.question}
                answer={question.answer}
                ordered={question.ordered}
                extra={question.extra}
                points={question.points}
                subDescription={question.subDescription}
                key={index}
              />
            ))
          ) : (
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
              No FAQs match your search query.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AllFAQs;
