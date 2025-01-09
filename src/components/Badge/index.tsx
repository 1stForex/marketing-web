"use client";
import { BadgeProps } from "@/src/types/Badge.interface";
import { Box, Typography } from "@mui/material";

const Badge: React.FC<BadgeProps> = ({ title }) => {
  return (
    <Box
      sx={{
        background: "#F30",
        borderRadius: "12px",
        padding: "4px 12px",
      }}
    >
      <Typography
        sx={{
          color: "var(--Shade-White, #FFF)",
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
