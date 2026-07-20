import Badge from "@/src/components/Badge";
import CustomVideo from "@/src/components/CustomVideo";
import BaseTypography from "@/src/styled/BaseTypography";
import HeadTypography from "@/src/styled/HeadTypography";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Community");
  return (
    <Box
      sx={{
        position: "relative",
        color: "#FFF",
        minHeight: "465px",
        height: "100%",
        py: "96px",
        borderRadius: "32px",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        "@media (max-width: 992px)": {
          py: "64px",
        },
        "@media (max-width: 576px)": {
          py: "32px",
        },
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CustomVideo />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          px: "16px",
          "@media (max-width: 768px)": {
            gap: "20px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        <Badge title={t("badge")} />

        <HeadTypography color="#FFF" textAlign={"center"} maxWidth={"734px"}>
          {t("title")}
        </HeadTypography>

        <BaseTypography color="#FFF" fontWeight={400} maxWidth={"842px"}>
          {t("description")}
        </BaseTypography>
      </Box>
    </Box>
  );
}
