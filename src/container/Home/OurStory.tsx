"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Bull from "@/src/assets/images/Bull.png";
import HeadTypography from "@/src/styled/HeadTypography";
import { useLocale, useTranslations } from "next-intl";
import { getLocaleDirection } from "@/src/i18n/config";

const OurStory = () => {
  const t = useTranslations("Home.story");
  const locale = useLocale();
  const direction = getLocaleDirection(locale);
  const paragraphs = ["paragraph1", "paragraph2", "paragraph3", "paragraph4", "paragraph5"];

  return (
    <Box
      sx={{
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        "@media (max-width: 992px)": {
          padding: "32px",
        },
        "@media (max-width: 576px)": {
          padding: "32px 16px",
        },
      }}
    >
      <Box
        sx={{
          mb: "24px",
          "@media (max-width: 768px)": {
            mb: "20px",
          },
          "@media (max-width: 576px)": {
            mb: "16px",
          },
        }}
      >
        <Badge title={t("badge")} />
      </Box>

      <HeadTypography
        sx={{
          mb: "32px",
          color: "#333",
          textAlign: "center",
          "@media (max-width: 768px)": {
            mb: "24px",
          },
          "@media (max-width: 576px)": {
            mb: "16px",
          },
        }}
      >
        {t.rich("title", {
          accent: (chunks) => (
            <span style={{ color: "var(--primary-400-base, #F30)" }}>
              {chunks}
            </span>
          ),
        })}
      </HeadTypography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: "24px",
          "@media (max-width: 992px)": {
            flexDirection: "column-reverse",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "65%",
            overflow: "hidden",
            "@media (max-width: 992px)": {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              height: "408px",
              overflowY: "auto",
              position: "relative",
              paddingInlineStart: "48px",
              "@media (max-width: 992px)": {
                paddingInlineStart: "32px",
              },
              "@media (max-width: 576px)": {
                paddingInlineStart: "16px",
              },
              "&::-webkit-scrollbar": {
                width: "8px",
                background: "transparent",
              },
              "&::-webkit-scrollbar-track": {
                background: "var(--Grey-900, #333)",
                borderRadius: "32px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "var(--primary-400-base, #F30)",
                borderRadius: "32px",
              },
              direction: "rtl",
              "& > *": {
                direction,
              },
            }}
          >
            <Typography
              sx={{
                color: "var(--Grey-900, #333)",

                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "-0.48px",
                mb: "16px",
                mt: "65px",
                "@media (max-width: 576px)": {
                  fontSize: "20px",
                },
              }}
            >
              {t("heading")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                mb: "117px",
              }}
            >
              {paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "var(--Shade-Black, #000)",

                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "120%",
                    letterSpacing: "-0.4px",
                    "@media (max-width: 992px)": {
                      fontSize: "16px",
                    },
                    "@media (max-width: 576px)": {
                      fontSize: "14px",
                      lineHeight: "145%",
                      letterSpacing: "0",
                    },
                  }}
                >
                  {t(paragraph)}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              insetInlineStart: "8px",
              insetInlineEnd: 0,
              height: "120px",
              background:
                "linear-gradient(to top, var(--Grey-50, #F9FAFB), transparent)",
              pointerEvents: "none",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            minWidth: "410px",
            borderRadius: "32px",
            boxShadow: "0px 1.5px 4px -1px rgba(16, 25, 40, 0.07)",
            aspectRatio: "1",
            "@media (max-width: 992px)": {
              minWidth: "60%",
            },
            "@media (max-width: 576px)": {
              width: "100%",
              minWidth: "auto",
            },
          }}
        >
          <Image
            src={Bull}
            alt="Bull"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
