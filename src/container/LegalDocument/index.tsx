import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { LegalDocument as LegalDocumentType } from "@/src/const/legalDocuments";

interface LegalDocumentProps {
  document: LegalDocumentType;
}

const LegalDocument = ({ document }: LegalDocumentProps) => {
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
          component="h1"
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
          {document.title}
        </Typography>

        {document.sections.map((section) => (
          <Box key={section.title}>
            <Typography
              component="h2"
              sx={{
                color: "#333",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "-0.48px",
                mb: "16px",
                "@media (max-width: 768px)": {
                  fontSize: "20px",
                  letterSpacing: "-0.4px",
                },
              }}
            >
              {section.title}
            </Typography>

            {section.paragraphs?.map((paragraph) => (
              <Typography
                key={paragraph}
                component="p"
                sx={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "-0.4px",
                  mb: "16px",
                  "@media (max-width: 768px)": {
                    fontSize: "16px",
                    letterSpacing: "-0.32px",
                  },
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {section.bullets && (
              <Box
                component="ul"
                sx={{
                  pl: "24px",
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {section.bullets.map((bullet) => (
                  <Typography
                    key={bullet}
                    component="li"
                    sx={{
                      color: "#000",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "120%",
                      letterSpacing: "-0.4px",
                      "@media (max-width: 768px)": {
                        fontSize: "16px",
                        letterSpacing: "-0.32px",
                      },
                    }}
                  >
                    {bullet}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default LegalDocument;
