import { Box, Typography } from "@mui/material";
import forexLogo from "../../assets/images/forex-logo.png";
import Image from "next/image";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  const commonStyle = {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23.3px",
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",

          "@media (max-width: 680px)": {
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          },
        }}
      >
        <Image src={forexLogo} alt="Forex Logo" loading="lazy" />
        <Typography
          sx={{
            ...commonStyle,
            color: "#1D2739",
          }}
        >
          &copy; {currentYear}. All rights reserved.
        </Typography>
        <Typography
          sx={{
            ...commonStyle,
            color: "#475367",
            width: "419px",

            "@media (max-width: 680px)": {
              textAlign: "center",
              width: "auto",
            },
          }}
        >
          All trademarks, logos and brand names are the property of their
          respective owners.
        </Typography>
      </Box>
    </Box>
  );
}
