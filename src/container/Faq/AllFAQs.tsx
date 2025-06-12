"use client";

import { Box, Typography } from "@mui/material";
import CustomInputField from "@/src/components/CustomInputField";
import SearchGrey from "@/src/assets/icons/search-grey.svg";
import { allQuestions } from "../../const/allQuestions";
import { useState } from "react";
import CustomAccordian from "@/src/components/CustomAccordian";
import HeadTypography from "@/src/styled/HeadTypography";

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
        <HeadTypography
          sx={{
            color: "#000",
            mb: "60px",
            "@media (max-width: 768px)": {
              textAlign: "left",
              mb: "32px",
            },
            "@media (max-width: 576px)": {
              lineHeight: "120%",
              mb: "28px",
            },
          }}
        >
          All FAQ&#39;s
        </HeadTypography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question, index) => (
              <CustomAccordian
                title={question.question}
                summary={question.answer}
                subSummary={question.subDescription}
                summaryPoints={question.points}
                summaryPointsOrdered={question.ordered}
                extra={question.extra}
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
