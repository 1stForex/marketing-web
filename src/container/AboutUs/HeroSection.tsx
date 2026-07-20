import Hero from "@/src/components/Hero";
import HeadTypography from "@/src/styled/HeadTypography";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("About");
  return (
    <Hero badgeTitle={t("badge")} bgImagePath="HomeHeroBg.jpg">
      <HeadTypography textAlign={"center"} maxWidth={"734px"}>
        {t("heroStart")}{" "}
        <span style={{ color: "#F30" }}>{t("heroHighlight")}</span>
      </HeadTypography>
    </Hero>
  );
}
