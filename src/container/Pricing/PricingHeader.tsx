"use client";
import Badge from "@/src/components/Badge";
import BaseTypography from "@/src/styled/BaseTypography";
import HeadTypography from "@/src/styled/HeadTypography";
import { Box } from "@mui/material";

const PricingHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        "@media (max-width: 768px)": {
          gap: "20px",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
        },
      }}
    >
      <Badge title="Pricing" />

      <HeadTypography color="#333" textAlign={"center"}>
        Start Trading with{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          Confidence
        </span>
      </HeadTypography>

      <BaseTypography color="#333" fontWeight={400}>
        Get access to proven signals, performance tracking, and the tools you
        need to grow.
      </BaseTypography>
    </Box>
  );
};

export default PricingHeader;
