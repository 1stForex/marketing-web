import { Box, Typography } from "@mui/material";
import CustomButton from "../Button";
import CustomInputField from "../CustomInputField";

export default function NewsLetter() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: "4px",

        "@media (max-width: 900px)": {
          flexDirection: "column",
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

            "@media (max-width: 900px)": {
              textAlign: "center",
            },
          }}
        >
          Join our newsletter
        </Typography>
        <Typography
          sx={{
            width: "330px",
            color: "#344054",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "23.3px",

            "@media (max-width: 900px)": {
              textAlign: "center",
              width: "auto",
            },
          }}
        >
          Get all the latest Rayna news delivered to your inbox
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          maxWidth: "486px",

          "@media (max-width: 900px)": {
            width: "100%",
          },
        }}
      >
        <CustomInputField placeholder="Email Address" borderRadius="32" />
        <CustomButton variant="red">Subscribe</CustomButton>
      </Box>
    </Box>
  );
}
