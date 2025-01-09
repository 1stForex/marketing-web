"use client";
import Badge from "@/src/components/Badge";
import { HeroProps } from "@/src/types/Hero.interface";
import { Box, Typography } from "@mui/material";

const Hero: React.FC<HeroProps> = ({
  badgeTitle,
  title,
  description,
  bgImagePath,
  children,
}) => {
  return (
    <Box
      sx={{
        color: "#FFF",
        minHeight: "465px",
        height: "100%",
        borderRadius: "32px",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${bgImagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {badgeTitle && <Badge title={badgeTitle} />}

        {title && (
          <Typography
            sx={{
              color: "var(--Shade-White, #FFF)",
              textAlign: "center",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "100%",
              letterSpacing: "-1.92px",
              maxWidth: "734px",
            }}
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            sx={{
              color: "var(--Shade-White, #FFF)",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-0.48px",
              maxWidth: "842px",
            }}
          >
            {description}
          </Typography>
        )}

        {children}
      </Box>
    </Box>
  );
};

export default Hero;
