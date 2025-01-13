"use client";
import Badge from "@/src/components/Badge";
import { BannerProps } from "@/src/types/Banner.interface";
import { Box, Typography } from "@mui/material";

const Banner: React.FC<BannerProps> = ({
  badgeTitle,
  description,
  children,
}) => {
  return (
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
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Banner;
