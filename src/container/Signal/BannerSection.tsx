import { Box } from "@mui/material";
import Banner from "@/src/components/Banner";
import BaseTypography from "@/src/styled/BaseTypography";
import { useTranslations } from "next-intl";

export default function BannerSection() {
  const t = useTranslations("Signal");
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/HomeHeroBg.jpg')`,
        boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowX: "hidden",
        mt: "-200px",
        "@media (max-width: 768px)": {
          mt: "-200px",
        },

        "@media (max-width: 640px)": {
          mt: "-150px",
        },
        "@media (max-width: 477px)": {
          mt: "-100px",
        },
        "@media (max-width: 451px)": {
          mt: "-50px",
        },
        "@media (max-width: 422px)": {
          mt: "-10px",
        },
        "@media (max-width: 390px)": {
          mt: "0px",
        },
        "@media (max-width: 375px)": {
          mt: "-100px",
        },
      }}
    >
      <Banner description={t("banner.quote")}>
        <BaseTypography color="#FFF" fontWeight={600}>
          {t("banner.description")}
        </BaseTypography>
      </Banner>
    </Box>
  );
}
