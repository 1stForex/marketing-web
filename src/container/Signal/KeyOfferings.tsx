import { Box } from "@mui/material";
import Carousel from "@/src/components/Carousel";
import { aiSignalKeyOfferings } from "@/src/const/aiSignalKeyOfferings";
import HeadTypography from "@/src/styled/HeadTypography";
import { useTranslations } from "next-intl";

export default function KeyOfferings() {
  const t = useTranslations("Signal");
  const cards = aiSignalKeyOfferings.map((card, index) => ({
    ...card,
    title: t(`keyOfferings.cards.${index}.title`),
    description: t(`keyOfferings.cards.${index}.description`),
  }));
  return (
    <Box>
      <Carousel badgeTitle={t("offersBadge")} cards={cards} isCarousel>
        <HeadTypography color="#333">
          {t("keyOfferings.start")}{" "}
          <span style={{ color: "var(--primary-400-base, #F30)" }}>
            {t("keyOfferings.highlight")}
          </span>
        </HeadTypography>
      </Carousel>
    </Box>
  );
}
