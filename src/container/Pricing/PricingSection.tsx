"use client";

import CustomButton from "@/src/components/Button";
import ToggleBtn from "@/src/components/ToggleBtn";
import { RedirectUrls } from "@/src/const/Enum";
import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PsychologyAltRoundedIcon from "@mui/icons-material/PsychologyAltRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import React from "react";
import { useFormatter, useTranslations } from "next-intl";

const monthlyPrice = 49.99;
const yearlyBilling = 499.9;
const yearlyMonthlyEquivalent = yearlyBilling / 12;

const includedFeatures = ["pairs", "signals", "levels", "history", "daily", "academy", "community", "cancel"];

const freeFeatures = [
  { key: "community", enabled: true }, { key: "previews", enabled: true },
  { key: "registration", enabled: true }, { key: "academy", enabled: true },
  { key: "allPairs", enabled: false }, { key: "signals", enabled: false },
  { key: "levels", enabled: false }, { key: "dashboard", enabled: false },
];

const processSteps = [
  {
    icon: <PsychologyAltRoundedIcon />,
    labelKey: "process.rules",
  },
  {
    icon: <RuleRoundedIcon />,
    labelKey: "process.engine",
  },
  {
    icon: <SensorsRoundedIcon />,
    labelKey: "process.alerts",
  },
  {
    icon: <LockOutlinedIcon />,
    labelKey: "process.access",
  },
];

const trustItems = [
  {
    icon: <ShieldOutlinedIcon />,
    titleKey: "trust.checkout.title", textKey: "trust.checkout.text",
  },
  {
    icon: <VerifiedUserOutlinedIcon />,
    titleKey: "trust.performance.title", textKey: "trust.performance.text",
  },
  {
    icon: <TuneRoundedIcon />,
    titleKey: "trust.cancel.title", textKey: "trust.cancel.text",
  },
];

function FeatureLine({
  label,
  enabled = true,
}: {
  label: string;
  enabled?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        color: enabled ? "#1D2739" : "#98A2B3",
      }}
    >
      {enabled ? (
        <CheckCircleRoundedIcon sx={{ color: "#F30", fontSize: 18, mt: "2px", flexShrink: 0 }} />
      ) : (
        <CloseRoundedIcon sx={{ color: "#B8C0CC", fontSize: 18, mt: "2px", flexShrink: 0 }} />
      )}
      <Typography sx={{ fontSize: "14px", lineHeight: "145%", fontWeight: enabled ? 600 : 500 }}>
        {label}
      </Typography>
    </Box>
  );
}

function SideList({
  title,
  children,
  order,
}: {
  title: string;
  children: React.ReactNode;
  order?: { xs?: number; lg?: number };
}) {
  return (
    <Box
      sx={{
        order,
        minWidth: 0,
        height: "100%",
        p: { xs: "20px", md: "24px" },
        borderRadius: "24px",
        background: "#FFF",
        border: "1px solid #EAECF0",
        alignSelf: "stretch",
        boxShadow: "0 12px 32px rgba(16,24,40,0.04)",
      }}
    >
      <Typography
        sx={{
          color: "#111827",
          fontSize: "20px",
          fontWeight: 800,
          pb: "14px",
          mb: "16px",
          borderBottom: "1px solid #EAECF0",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {children}
      </Box>
    </Box>
  );
}

const PricingSection = () => {
  const t = useTranslations("Pricing");
  const format = useFormatter();
  const [isMonthly, setIsMonthly] = React.useState(true);
  const displayPrice = isMonthly ? monthlyPrice : yearlyMonthlyEquivalent;
  const priceLabel = format.number(displayPrice, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "26px", md: "36px" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "10px", sm: "14px" },
          flexWrap: "wrap",
          maxWidth: { xs: "300px", sm: "none" },
          mx: "auto",
        }}
      >
        <Typography sx={{ color: isMonthly ? "#111827" : "#667185", fontWeight: 700 }}>
          {t("monthly")}
        </Typography>
        <ToggleBtn
          checked={!isMonthly}
          onChange={() => setIsMonthly((current) => !current)}
          inputProps={{ "aria-label": t("toggleYearly") }}
        />
        <Typography sx={{ color: !isMonthly ? "#111827" : "#667185", fontWeight: 700 }}>
          {t("yearly")}
        </Typography>
        <Box
          sx={{
            px: "12px",
            py: "5px",
            borderRadius: "999px",
            background: "#E7F6EC",
            border: "1px solid #B7E4C7",
            flexBasis: { xs: "100%", sm: "auto" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "#0F973D", fontSize: "13px", fontWeight: 800 }}>
            {t("twoMonthsFree")}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          p: { xs: "14px", md: "26px", lg: "34px" },
          borderRadius: { xs: "24px", md: "34px" },
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FFF8F5 48%, #FFFFFF 100%)",
          border: "1px solid #F0F2F5",
          boxShadow: "0 18px 54px rgba(16,24,40,0.06)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 0.92fr) minmax(360px, 1.16fr) minmax(0, 0.92fr)",
            },
            gap: { xs: "16px", lg: "22px" },
            alignItems: "stretch",
          }}
        >
          <SideList title={t("includedTitle")} order={{ xs: 2, lg: 1 }}>
            {includedFeatures.map((feature) => (
              <FeatureLine key={feature} label={t(`included.${feature}`)} />
            ))}
          </SideList>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: "28px 20px", sm: "34px", md: "42px" },
              borderRadius: "30px",
              background: "#FFF",
              border: "1px solid #EAECF0",
              boxShadow: "0 24px 70px rgba(16,24,40,0.13)",
              textAlign: "center",
              overflow: "hidden",
              minHeight: { lg: "560px" },
              order: { xs: 1, lg: 2 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: "0 0 auto 0",
                height: "6px",
                background: "linear-gradient(90deg, #F30, #FF7A59)",
              }}
            />
            <Box
              sx={{
                display: "inline-flex",
                alignSelf: "center",
                px: "14px",
                py: "6px",
                borderRadius: "999px",
                background: "#111827",
                color: "#FFF",
                fontSize: "13px",
                fontWeight: 800,
                mb: "22px",
              }}
            >
              {t("unlimited")}
            </Box>
            <Typography sx={{ color: "#F30", fontSize: "16px", fontWeight: 800 }}>
              {t("unlimitedAccess")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: "8px",
                mt: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#050505",
                  fontSize: { xs: "52px", sm: "64px", md: "72px" },
                  fontWeight: 900,
                  lineHeight: "100%",
                  letterSpacing: 0,
                }}
              >
                ${priceLabel}
              </Typography>
              <Typography sx={{ color: "#475467", fontSize: "16px", mb: "8px", fontWeight: 700 }}>
                {t("perMonth")}
              </Typography>
            </Box>
            <Typography sx={{ color: "#667185", fontSize: "14px", mt: "12px", minHeight: "21px" }}>
              {isMonthly
                ? t("monthlyBilling")
                : t("yearlyBilling", { amount: format.number(yearlyBilling, { minimumFractionDigits: 2 }) })}
            </Typography>
            <Typography
              sx={{
                color: "#344054",
                fontSize: { xs: "15px", md: "17px" },
                lineHeight: "155%",
                maxWidth: "420px",
                mx: "auto",
                mt: "22px",
              }}
            >
              {t("planDescription")}
            </Typography>
            <Box sx={{ mt: "24px" }}>
              <CustomButton
                width="100%"
                borderRadius="12px"
                padding="17px 24px"
                href={RedirectUrls.SUBSCRIPTION_URL}
              >
                {t("startSignals")}
              </CustomButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                mt: "22px",
              }}
            >
              {[t("badges.cancel"), t("badges.checkout"), t("badges.instant")].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    px: "10px",
                    py: "7px",
                    borderRadius: "999px",
                    background: "#F8FAFC",
                    border: "1px solid #EAECF0",
                    minHeight: "32px",
                  }}
                >
                  <CheckCircleRoundedIcon sx={{ color: "#667185", fontSize: 15, flexShrink: 0 }} />
                  <Typography
                    sx={{
                      color: "#475467",
                      fontSize: "12px",
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <SideList title={t("freeTitle")} order={{ xs: 3, lg: 3 }}>
            {freeFeatures.map((feature) => (
              <FeatureLine
                key={feature.key}
                label={t(`free.${feature.key}`)}
                enabled={feature.enabled}
              />
            ))}
          </SideList>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: "28px",
          background: "#FFF",
          border: "1px solid #EAECF0",
          boxShadow: "0 16px 48px rgba(16,24,40,0.07)",
          p: { xs: "24px", md: "34px" },
        }}
      >
        <Typography
          sx={{
            color: "#111827",
            fontSize: { xs: "22px", md: "26px" },
            fontWeight: 800,
            textAlign: "center",
            mb: { xs: "22px", md: "30px" },
          }}
        >
          {t("process.title")}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: { xs: "14px", lg: "18px" },
          }}
        >
          {processSteps.map((step, index) => (
            <Box
              key={step.labelKey}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px",
                p: "20px",
                borderRadius: "18px",
                background: "#F9FAFB",
                border: "1px solid #EEF0F3",
              }}
            >
              <Box
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: "#FFF",
                  color: "#F30",
                  border: "1px solid #EAECF0",
                }}
              >
                {step.icon}
              </Box>
              <Typography sx={{ color: "#111827", fontSize: "15px", fontWeight: 800 }}>
                {t(step.labelKey)}
              </Typography>
              {index < processSteps.length - 1 && (
                <ArrowForwardRoundedIcon
                  sx={{
                    display: { xs: "none", lg: "block" },
                    position: "absolute",
                    right: "-20px",
                    top: "42px",
                    color: "#98A2B3",
                    fontSize: 24,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: "14px",
        }}
      >
        {trustItems.map((item) => (
          <Box
            key={item.titleKey}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              p: "18px",
              borderRadius: "18px",
              background: "#FFF",
              border: "1px solid #EAECF0",
            }}
          >
            <Box sx={{ color: "#111827", lineHeight: 0 }}>{item.icon}</Box>
            <Box>
              <Typography sx={{ color: "#111827", fontSize: "15px", fontWeight: 800 }}>
                {t(item.titleKey)}
              </Typography>
              <Typography sx={{ color: "#667185", fontSize: "13px", lineHeight: "145%", mt: "2px" }}>
                {t(item.textKey)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PricingSection;
