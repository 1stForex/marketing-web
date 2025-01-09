"use client";
import { BadgeProps } from "@/src/types/Badge.interface";
import { Box, Typography } from "@mui/material";

const Badge: React.FC<BadgeProps> = ({ title, variant = "red" }) => {
  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case "black":
        return {
          background: "var(--Grey-900, #333)",
          textColor: "var(--Shade-White, #FFF)",
        };
      case "grey":
        return {
          background: "var(--Grey-75, #F7F9FC)",
          textColor: "var(--primary-400-base, #F30)",
        };
      default:
        return {
          background: "var(--primary-400-base, #F30)",
          textColor: "var(--Shade-White, #FFF)",
        };
    }
  };

  const { background, textColor } = getBadgeStyles(variant);

  return (
    <Box
      sx={{
        background: background,
        borderRadius: "12px",
        padding: "4px 12px",
      }}
    >
      <Typography
        sx={{
          color: textColor,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "145%",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Badge;
