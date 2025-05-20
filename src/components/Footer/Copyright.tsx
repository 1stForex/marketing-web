import { Box, Typography } from "@mui/material";
import forexLogo from "../../assets/images/forex-logo.png";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={"/home"}>
          <Image
            src={forexLogo}
            alt="Forex Logo"
            loading="lazy"
            width={122}
            height={24}
          />
        </Link>
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
            maxWidth: "424px",

            "@media (max-width: 680px)": {
              textAlign: "center",
            },
          }}
        >
          All content, signals, and tools are for educational and informational
          purposes only. Trading involves risk.
        </Typography>
      </Box>
    </Box>
  );
}
