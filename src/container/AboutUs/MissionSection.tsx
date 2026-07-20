import Image from "next/image";
import Community from "@/src/assets/images/community.png";
import Badge from "@/src/components/Badge";
import { Box, Container } from "@mui/material";
import HeadTypography from "@/src/styled/HeadTypography";
import BaseTypography from "@/src/styled/BaseTypography";
import { useTranslations } from "next-intl";

export default function MissionSection() {
  const t = useTranslations("About");
  return (
    <Box
      sx={{
        background: "#333",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pt: "80px",
            gap: "31px",

            "@media (max-width: 992px)": {
              pt: "60px",
            },

            "@media (max-width: 768px)": {
              pt: "40px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: "1006px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "21px",
              }}
            >
              <Badge title={t("visionBadge")} />
              <HeadTypography color="#FFF">{t("mission.title")}</HeadTypography>
            </Box>
            <BaseTypography color="#FFF" fontWeight={400}>
              {t("mission.paragraph1")}
            </BaseTypography>
            <BaseTypography color="#FFF" fontWeight={400}>
              {t("mission.paragraph2")}
            </BaseTypography>
          </Box>
          <Box
            sx={{
              position: "relative",
              maxWidth: "966px",
              width: "100%",
              aspectRatio: "907 / 417",
            }}
          >
            <Image
              src={Community}
              alt={t("communityAlt")}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
