import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";
import StyledTypography from "./StyledTypography";
import forexLogo from "../../assets/images/forex-logo.png";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

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
        <StyledTypography
          sx={{
            color: "#1D2739",
          }}
        >
          &copy; {currentYear}. All rights reserved.
        </StyledTypography>
        <StyledTypography
          sx={{
            color: "#475367",
            maxWidth: "424px",

            "@media (max-width: 680px)": {
              textAlign: "center",
            },
          }}
        >
          All content, signals, and tools are for educational and informational
          purposes only. Trading involves risk.
        </StyledTypography>
      </Box>
    </Box>
  );
}
