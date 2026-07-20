"use client";
import { Box, Container, useMediaQuery } from "@mui/material";
import Badge from "@/src/components/Badge";
import BaseTypography from "@/src/styled/BaseTypography";
import { useTranslations } from "next-intl";

const Vision = () => {
  const t = useTranslations("Home.vision");
  const firstHalfText = t("first");
  const secondHalfText = t("second");

  const isTabView = useMediaQuery("(min-width: 768px)");
  const textToDisplay = isTabView
    ? `${firstHalfText} ${secondHalfText}`
    : firstHalfText;

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          py: "80px",
          gap: "12px",
          "@media (max-width: 992px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: "60px",
          },
          "@media (max-width: 576px)": {
            py: "32px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            minWidth: "167px",

            "@media (max-width: 576px)": {
              minWidth: "auto",
            },
          }}
        >
          <Badge title={t("badge")} />
        </Box>

        <BaseTypography
          sx={{
            color: "#FFF",
            fontWeight: 600,
            lineHeight: "144%",
            maxWidth: "802px",
            textAlign: "start",
            "@media (max-width: 992px)": {
              fontSize: "20px",
              textAlign: "center",
            },
          }}
        >
          {textToDisplay}
        </BaseTypography>
        <BaseTypography
          sx={{
            display: isTabView ? "none" : "inline-block",
            color: "#FFF",
            fontWeight: 600,
            lineHeight: "144%",
            maxWidth: "802px",
            textAlign: "start",
            "@media (max-width: 992px)": {
              fontSize: "20px",
              textAlign: "center",
            },
          }}
        >
          {secondHalfText}
        </BaseTypography>
      </Box>
    </Container>
  );
};

export default Vision;
