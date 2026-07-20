import Banner from "@/src/components/Banner";
import HeadTypography from "@/src/styled/HeadTypography";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function BannerSection() {
  const t = useTranslations("About");
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/HomeHeroBg.jpg')`,
        boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Banner
        badgeTitle={t("visionBadge")}
        description={t("community.description")}
        secondaryDescription={t("community.secondaryDescription")}
      >
        <HeadTypography color="#FFF" textAlign={"center"} maxWidth={"535px"}>
          {t("community.title")}
        </HeadTypography>
      </Banner>
    </Box>
  );
}
