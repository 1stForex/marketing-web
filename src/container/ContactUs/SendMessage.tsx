import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";

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

      <Typography
        sx={{
          color: "var(--Grey-900, #333)",
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "-1.92px",
          maxWidth: "381px",
          "@media (max-width: 768px)": {
            fontSize: "40px",
            letterSpacing: "-1.28px",
            maxWidth: "none",
            textAlign: "center",
          },
          "@media (max-width: 576px)": {
            fontSize: "28px",
            letterSpacing: "-0.64px",
          },
        }}
      >
        Send Us A{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>Message</span>
      </Typography>

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
