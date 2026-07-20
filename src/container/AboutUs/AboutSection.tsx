"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import About from "@/src/assets/images/about-us.jpg";
import Logo from "@/src/assets/icons/logo.svg";
import AboutUsTypography from "@/src/styled/AboutUsTypography";
import HeadTypography from "@/src/styled/HeadTypography";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");
  const paragraphs = [
    t("about.paragraph1"), t("about.paragraph2"), t("about.paragraph3"),
    t("about.paragraph4"), t("about.paragraph5"),
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "21px",
          alignItems: "flex-start",
          marginBottom: "27px",
        }}
      >
        <Box
          sx={{
            background: "#F30",
            borderRadius: "12px",
            padding: "4px 12px",
            "@media (max-width: 992px)": {
              mx: "auto",
            },
          }}
        >
          <Image src={Logo} alt="logo" />
        </Box>
        <HeadTypography
          sx={{
            color: "#333",
            "@media (max-width: 992px)": {
              textAlign: "center",
              width: "100%",
            },
          }}
        >
          {t("about.title")}
        </HeadTypography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "95px",
          alignItems: "center",
          "@media (max-width: 992px)": {
            gap: "32px",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {paragraphs.map((paragraph) => (
            <AboutUsTypography key={paragraph}>{paragraph}</AboutUsTypography>
          ))}
        </Box>
        <Box
          sx={{
            position: "relative",
            flex: "0 0 416px",
            width: "416px",
            aspectRatio: "1",
            overflow: "hidden",
            borderRadius: "32px",
            boxShadow: "0px 16px 34px -24px rgba(16, 25, 40, 0.45)",
            "@media (max-width: 992px)": {
              width: "min(100%, 416px)",
              flexBasis: "auto",
            },
          }}
        >
          <Image
            src={About}
            alt={t("teamAlt")}
            fill
            sizes="(max-width: 992px) 100vw, 416px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
