import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";
import CourseCard from "./CourseCard";
import CustomButton from "@/src/components/Button";
import AdvanceCourse from "@/src/assets/images/advance.png";
import HeadTypography from "@/src/styled/HeadTypography";
import Link from "next/link";
import { RedirectUrls } from "@/src/const/Enum";
import { useTranslations } from "next-intl";

const Courses = () => {
  const t = useTranslations("Academy");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Badge title={t("courses.badge")} />

      <HeadTypography
        sx={{
          color: "#333",
          mt: "21px",
          mb: "56px",
          "@media (max-width: 768px)": {
            mb: "48px",
          },
          "@media (max-width: 576px)": {
            mb: "40px",
          },
        }}
      >
        {t("courses.start")}{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>{t("courses.highlight")}</span>
      </HeadTypography>

      <CourseCard
        title={t("courses.courseTitle")}
        price={0}
        oldPrice={3000}
        description={t("courses.courseDescription")}
        rating={5}
        reviews={91}
        image={AdvanceCourse}
      />

      <Box
        sx={{
          width: "100%",
          borderRadius: "32px",
          background: "var(--primary-400-base, #F30)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",

          "@media (max-width: 576px)": {
            padding: "12px 20px",
            flexDirection: "column",
            gap: "8px",
          },
        }}
      >
        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "120%",
            letterSpacing: "-0.4px",
            maxWidth: "880px",

            "@media (max-width: 768px)": {
              fontSize: "18px ",
            },

            "@media (max-width: 576px)": {
              fontSize: "16px ",
            },
          }}
        >
          {t("courses.referral")}
        </Typography>

        <Box
          flexShrink={0}
          component={Link}
          href={RedirectUrls.REGISTER_URL}
          passHref
        >
          <CustomButton variant="black">{t("signup")}</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
