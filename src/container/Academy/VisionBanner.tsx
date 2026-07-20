import { Box } from "@mui/material";
import Banner from "@/src/components/Banner";
import HeadTypography from "@/src/styled/HeadTypography";
import { useTranslations } from "next-intl";

const VisionBanner = () => {
  const t = useTranslations("Academy");
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
        badgeTitle={t("vision.badge")}
        description={t("vision.description")}
      >
        <HeadTypography color="#FFF" textAlign={"center"}>
          {t("vision.title")}
        </HeadTypography>
      </Banner>
    </Box>
  );
};

export default VisionBanner;
