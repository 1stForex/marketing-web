import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";
import HeadTypography from "@/src/styled/HeadTypography";

const SendMessage = () => {
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
      <Badge title="Contact" />

      <HeadTypography
        sx={{
          color: "#333",
          maxWidth: "381px",
          "@media (max-width: 768px)": {
            maxWidth: "none",
          },
        }}
      >
        Send Us A{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>Message</span>
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
        You may also leave your contact information here, and a 1st Forex
        representative will contact you within 1 working day.
      </Typography>
    </Box>
  );
};

export default SendMessage;
