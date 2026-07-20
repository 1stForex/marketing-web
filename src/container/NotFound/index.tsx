import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "@/src/assets/images/404.png";
import CustomButton from "@/src/components/Button";
import Home from "@/src/assets/icons/home.svg";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "975px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
          mb: "80px",

          "@media (max-width: 1240px)": {
            maxWidth: "775px",
          },

          "@media (max-width: 768px)": {
            gap: "50px",
            mb: "60px",
          },

          "@media (max-width: 576px)": {
            gap: "40px",
            mb: "40px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "900",
            lineHeight: "100%",
            letterSpacing: "-2.24px",
            "@media (max-width: 768px)": {
              fontSize: "52px",
            },
            "@media (max-width: 576px)": {
              fontSize: "48px",
            },
          }}
        >
          {t("title")}
        </Typography>
        <Box
          sx={{
            position: "relative",
            maxWidth: "975px",
            width: "100%",
            aspectRatio: "7/3",
          }}
        >
          <Image
            src={NotFoundImage}
            alt={t("imageAlt")}
            fill
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
        <Box component={Link} href="/home">
          <CustomButton
            variant="white"
            icon={
              <Image
                src={Home}
                alt={t("homeIconAlt")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
          >
            {t("goHome")}
          </CustomButton>
        </Box>
      </Box>
    </Container>
  );
}
