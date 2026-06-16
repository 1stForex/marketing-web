import { Box, Typography } from "@mui/material";
import CustomButton from "../Button";
import CustomInputField from "../CustomInputField";

export default function NewsLetter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        gap: "24px",

        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#333",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "28.8px",
            letterSpacing: "-0.48px",

            "@media (max-width: 768px)": {
              textAlign: "center",
            },
          }}
        >
          Join our newsletter
        </Typography>
        <Typography
          sx={{
            width: "312px",
            color: "#344054",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "23.3px",

            "@media (max-width: 768px)": {
              textAlign: "center",
              width: "auto",
            },
          }}
        >
          Get AI-driven signal alerts, strategy tips, and market
          updates—straight to your inbox.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          maxWidth: "486px",
          "@media (max-width: 768px)": {
            width: "100%",
            maxWidth: "100%",
          },
          "@media (max-width: 576px)": {
            flexDirection: "column",
            "& .MuiButtonBase-root": {
              width: "100%",
            },
          },
        }}
      >
        <CustomInputField
          placeholder="Email Address"
          borderRadius="32"
          background="white"
        />
        <CustomButton variant="red">Subscribe</CustomButton>
      </Box>
    </Box>
  );
}
