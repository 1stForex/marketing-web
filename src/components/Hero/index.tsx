"use client";
import Badge from "@/src/components/Badge";
import BaseTypography from "@/src/styled/BaseTypography";
import HeadTypography from "@/src/styled/HeadTypography";
import { HeroProps } from "@/src/types/Hero.interface";
import { Box } from "@mui/material";

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
        "@media (max-width: 768px)": {
          minHeight: "400px",
        },
        "@media (max-width: 576px)": {
          minHeight: "377px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          padding: "16px",
          "@media (max-width: 768px)": {
            gap: "20px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        {badgeTitle && <Badge title={badgeTitle} />}

        {title && (
          <HeadTypography color="#FFF" textAlign={"center"} maxWidth={"734px"}>
            {title}
          </HeadTypography>
        )}

        {description && (
          <BaseTypography color="#FFF" fontWeight={400} maxWidth={"842px"}>
            {description}
          </BaseTypography>
        )}

        {children}
      </Box>
    </Box>
  );
};

export default Hero;
