"use client";
import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";

const Vision = () => {
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        mx: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        py: "80px",
      }}
    >
      <Badge title="Vision Statement" />

      <Typography
        sx={{
          color: "var(--Shade-White, #FFF)",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "144%",
          letterSpacing: "-0.48px",

          maxWidth: "802px",
        }}
      >
        &quot;To empower a global community of traders by blending two decades
        of expertise with cutting edge AI technology, delivering unparalleled
        forex education, state-of-the-art signals, and innovative trading
        solutions that inspire financial growth and confidence. At 1st Forex, we
        are shaping the future of trading by building a connected, adaptive, and
        results-driven community.&quot;
      </Typography>
    </Box>
  );
};

export default Vision;
