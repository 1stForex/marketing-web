import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";
import HeadTypography from "@/src/styled/HeadTypography";
import { getTranslations } from "next-intl/server";

const SendMessage = async () => {
  const t = await getTranslations("Contact");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "flex-start",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
        },
      }}
    >
      <Badge title={t("contactBadge")} />

      <HeadTypography
        sx={{
          color: "#333",
          maxWidth: "381px",
          "@media (max-width: 768px)": {
            maxWidth: "none",
          },
        }}
      >
        {t("sendMessagePrefix")}{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>
          {t("sendMessageAccent")}
        </span>
      </HeadTypography>

      <Typography
        sx={{
          color: "#333",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "120%",
          letterSpacing: "-0.36px",
          maxWidth: "421px",
          "@media (max-width: 768px)": {
            fontSize: "16px",
            maxWidth: "none",
            textAlign: "center",
          },
          "@media (max-width: 576px)": {
            fontSize: "14px",
          },
        }}
      >
        {t("responseDescription")}
      </Typography>
    </Box>
  );
};

export default SendMessage;
