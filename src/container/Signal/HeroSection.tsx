import { Box } from "@mui/material";
import Hero from "@/src/components/Hero";
import CustomButton from "@/src/components/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Signal");
  return (
    <Hero
      badgeTitle={t("badge")}
      bgImagePath="HomeHeroBg.jpg"
      title={t("title")}
      description={t("description")}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link href="/ai-signal" passHref>
          <CustomButton variant="red">{t("tradingSignals")}</CustomButton>
        </Link>
        <Link href="/academy" passHref>
          <CustomButton variant="transparent">{t("academy")}</CustomButton>
        </Link>
      </Box>
    </Hero>
  );
}
