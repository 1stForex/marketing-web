import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import { Box } from "@mui/material";
import OverviewBaseTypography from "./OverviewBaseTypography";

export default function Overview() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "130px",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
        },
      }}
    >
      <Box
        sx={{
          background: "#F30",
          borderRadius: "12px",
          padding: "4px 12px",
        }}
      >
        <Image src={Logo} alt="logo" />
      </Box>
      <Box>
        <OverviewBaseTypography mb={"12px"}>
          1st Forex Trading Signals merge
          <span style={{ color: "#F30" }}> 20 years </span> of market expertise
          with our copyrighted{" "}
          <span style={{ color: "#F30" }}>Break Out System</span> to support a
          more disciplined trading process.
        </OverviewBaseTypography>
        <OverviewBaseTypography mb={"12px"}>
          Our process reviews market structure, risk levels, and historical
          behavior to deliver clear signals directly to your dashboard and
          mobile experience.
        </OverviewBaseTypography>
        <OverviewBaseTypography>
          With <span style={{ color: "#F30" }}>24/7 support</span>, direct
          access to an experienced trading team, and a thriving forex community
          by your side, professional-grade trading has never been more
          accessible.
        </OverviewBaseTypography>
      </Box>
    </Box>
  );
}
