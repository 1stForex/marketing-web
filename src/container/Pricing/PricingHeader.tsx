"use client";

import Badge from "@/src/components/Badge";
import SignalMobile from "@/src/assets/images/signal-mobile.png";
import { Box, Typography } from "@mui/material";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Image from "next/image";

const proofPoints = [
  {
    icon: <AutoGraphRoundedIcon />,
    value: "1,431",
    label: "Historical trades tracked",
  },
  {
    icon: <RuleRoundedIcon />,
    value: "91.7%",
    label: "Historical win rate",
  },
  {
    icon: <PublicRoundedIcon />,
    value: "5",
    label: "Primary FX pairs covered",
  },
  {
    icon: <ShieldOutlinedIcon />,
    value: "24/5",
    label: "Market-week coverage",
  },
];

const PricingHeader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: "24px", md: "32px" },
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF6F3 52%, #FFFFFF 100%)",
        border: "1px solid #F0F2F5",
        px: { xs: "18px", sm: "28px", md: "44px" },
        pt: { xs: "32px", md: "48px" },
        pb: { xs: "24px", md: "36px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(255,51,0,0.08) 0%, rgba(255,255,255,0) 42%), repeating-linear-gradient(90deg, rgba(29,39,57,0.04) 0 1px, transparent 1px 78px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
          alignItems: "center",
          gap: { xs: "26px", lg: "34px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",
            minHeight: "330px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "-42px",
              top: "-18px",
              width: "292px",
              transform: "rotate(-8deg)",
              opacity: 0.92,
            }}
          >
            <Image
              src={SignalMobile}
              alt="1stForex mobile signal preview"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "88px",
              bottom: "24px",
              width: "300px",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(228,231,236,0.9)",
              boxShadow: "0 22px 48px rgba(16,24,40,0.14)",
              p: "18px",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography sx={{ color: "#F30", fontSize: "12px", fontWeight: 800 }}>
              1STFOREX SIGNAL
            </Typography>
            <Typography sx={{ color: "#1D2739", fontSize: "18px", fontWeight: 800, mt: "6px" }}>
              EUR/USD · BUY
            </Typography>
            <Typography sx={{ color: "#667185", fontSize: "13px", mt: "8px" }}>
              Entry, stop loss, take profit, and performance context in one
              signal workflow.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
            gap: "18px",
          }}
        >
          <Badge title="Pricing" />
          <Typography
            component="h1"
            sx={{
              color: "#111827",
              fontSize: { xs: "38px", sm: "52px", md: "64px" },
              fontWeight: 800,
              lineHeight: "104%",
              letterSpacing: 0,
              maxWidth: "760px",
            }}
          >
            Get access to{" "}
            <Box component="span" sx={{ color: "#F30" }}>
              every signal.
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#475467",
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: "150%",
              maxWidth: "680px",
            }}
          >
            One unlimited plan for trading signals, historical performance
            visibility, academy content, and the community tools
            built around disciplined execution.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: "12px", md: 0 },
          mt: { xs: "28px", md: "34px" },
          borderRadius: "24px",
          background: "#FFF",
          border: "1px solid #E4E7EC",
          boxShadow: "0 18px 48px rgba(16,24,40,0.08)",
          overflow: "hidden",
          isolation: "isolate",
        }}
      >
        {proofPoints.map((point, index) => (
          <Box
            key={point.label}
            sx={{
              p: { xs: "18px 14px", md: "26px 22px" },
              textAlign: "center",
              background: "#FFF",
              borderRight: {
                xs: "none",
                md: index === proofPoints.length - 1 ? "none" : "1px solid #E4E7EC",
              },
            }}
          >
            <Box sx={{ color: "#F30", lineHeight: 0, mb: "10px" }}>
              {point.icon}
            </Box>
            <Typography sx={{ color: "#111827", fontSize: { xs: "22px", md: "28px" }, fontWeight: 800 }}>
              {point.value}
            </Typography>
            <Typography sx={{ color: "#475467", fontSize: { xs: "12px", md: "14px" }, lineHeight: "145%", mt: "4px" }}>
              {point.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricingHeader;
