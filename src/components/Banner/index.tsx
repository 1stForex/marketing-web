"use client";

import Badge from "@/src/components/Badge";
import BaseTypography from "@/src/styled/BaseTypography";
import { BannerProps } from "@/src/types/Banner.interface";
import { Box, Container, useMediaQuery } from "@mui/material";

const Banner: React.FC<BannerProps> = ({
  badgeTitle,
  description,
  secondaryDescription,
  children,
}) => {
  const isTabView = useMediaQuery("(min-width: 769px)");
  const textToDisplay =
    secondaryDescription && isTabView
      ? `${description} ${secondaryDescription}`
      : description;
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          py: "80px",
          maxWidth: "980px",
          mx: "auto",
          "@media (max-width: 768px)": {
            py: "40px",
          },
          "@media (max-width: 576px)": {
            py: "20px",
          },
        }}
      >
        {badgeTitle && <Badge title={badgeTitle} />}

        {children}

        <BaseTypography color="#FFF" fontWeight={600}>
          {textToDisplay}
        </BaseTypography>
        {secondaryDescription && (
          <BaseTypography
            sx={{
              display: isTabView ? "none" : "inline",
              color: "#FFF",
              fontWeight: 600,
            }}
          >
            {secondaryDescription}
          </BaseTypography>
        )}
      </Box>
    </Container>
  );
};

export default Banner;
