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
        }}
      >
        You may also leave your contact information here, and a 1st Forex
        representative will contact you within 1 working day.
      </Typography>
    </Box>
  );
};

export default SendMessage;
