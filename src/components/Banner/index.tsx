"use client";
import Badge from "@/src/components/Badge";
import { BannerProps } from "@/src/types/Banner.interface";
import { Box, Container, Typography } from "@mui/material";

const Banner: React.FC<BannerProps> = ({
  badgeTitle,
  description,
  children,
}) => {
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

        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            textAlign: "center",

            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "120%",
            letterSpacing: "-0.48px",
            "@media (max-width: 768px)": {
              fontSize: "20px",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
              letterSpacing: "-0.32px",
            },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default Banner;
