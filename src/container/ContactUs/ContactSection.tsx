import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import SendMessage from "./SendMessage";

const ContactSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        padding: "60px",
        gap: "24px",
        "@media (max-width: 992px)": {
          padding: "40px",
        },
        "@media (max-width: 768px)": {
          flexDirection: "column",
          padding: "24px",
        },
        "@media (max-width: 576px)": {
          padding: "16px",
        },
      }}
    >
      <SendMessage />
      <ContactForm />
    </Box>
  );
};

export default ContactSection;
