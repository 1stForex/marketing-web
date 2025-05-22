import React from "react";
import { TermsAndCondition } from "@/src/const/termsAndConditions";
import { Box, Container, Typography } from "@mui/material";
import "./style.css";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1216px",
          mx: "auto",
          mb: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          "@media (max-width: 576px)": {
            mt: "5px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            color: "#333",
            textAlign: "center",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",

            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },
            "@media (max-width: 576px)": {
              fontSize: "26px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          TERMS AND CONDITIONS
        </Typography>
        {TermsAndCondition.map((section, index) => (
          <Box
            className="terms-and-conditions-section"
            key={index}
            dangerouslySetInnerHTML={{ __html: section.section.join("") }}
            width="100%"
          />
        ))}
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
