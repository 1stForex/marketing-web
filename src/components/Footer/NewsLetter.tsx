import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "../Button";

export default function NewsLetter() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",

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
            fontFamily: "inherit",

            "@media (max-width: 768px)": {
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
            fontFamily: "inherit",

            "@media (max-width: 768px)": {
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
          width: "486px",

          "@media (max-width: 768px)": {
            width: "100%",
          },
        }}
      >
        <TextField
          id="email-input"
          placeholder="Email Address"
          type="email"
          autoComplete="current-email"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "32px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
            },
          }}
        />
        <CustomButton variant="red">Subscribe</CustomButton>
      </Box>
    </Box>
  );
}
