import Image from "next/image";
import Badge from "@/src/components/Badge";
import { Box } from "@mui/material";
import CourseLaptop from "@/src/assets/images/course.png";
import AboutUsTypography from "@/src/styled/AboutUsTypography";
import HeadTypography from "@/src/styled/HeadTypography";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("Academy");
  return (
    <Box
      sx={{
        padding: "60px 0 60px 60px",
        display: "flex",
        alignItems: "center",
        gap: "28px",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "-5px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",

        "@media (max-width: 992px)": {
          padding: "40px",
        },

        "@media (max-width: 768px)": {
          padding: "30px",
        },

        "@media (max-width: 576px)": {
          padding: "15px",
        },
      }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",

          "@media (max-width: 992px)": {
            width: "auto",
            alignItems: "center",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge title={t("about.badge")} />
        </Box>

        <HeadTypography color="#333">{t("about.title")}</HeadTypography>

        <AboutUsTypography>
          {t("about.paragraph1")}
        </AboutUsTypography>

        <AboutUsTypography>
          {t("about.paragraph2")}
        </AboutUsTypography>

        <AboutUsTypography>
          {t("about.paragraph3")}
        </AboutUsTypography>

        <AboutUsTypography>
          {t("about.paragraph4")}
        </AboutUsTypography>

        <AboutUsTypography>
          {t("about.paragraph5")}
        </AboutUsTypography>
      </Box>

      <Box
        sx={{
          width: "40%",
          aspectRatio: "526 / 461",
          position: "relative",
          "@media (max-width: 992px)": {
            display: "none",
          },
        }}
      >
        <Image src={CourseLaptop} alt={t("about.imageAlt")} fill />
      </Box>
    </Box>
  );
};

export default AboutUs;
