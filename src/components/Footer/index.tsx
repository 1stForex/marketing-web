import { Box, Divider } from "@mui/material";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";
import CompanyInfo from "./CompanyInfo";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#F9FAFB",
        padding: "80px 112px",

        "@media (max-width: 992px)": {
          padding: "40px",
        },

        "@media (max-width: 768px)": {
          padding: "20px 15px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: "80%",
          maxWidth: "1214px",
        }}
      >
        <NewsLetter />
        <Divider
          sx={{
            width: "100%",
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderWidth: "1px",
            marginY: 2,
          }}
        />
        <FooterLinks />
        <Divider
          sx={{
            width: "100%",
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderWidth: "1px",
            marginY: 2,
          }}
        />
        <CompanyInfo />
      </Box>
    </Box>
  );
}
