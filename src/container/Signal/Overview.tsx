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
          1st Forex AI Signal merges
          <span style={{ color: "#F30" }}> 20 years </span> of market expertise
          with our copyrighted{" "}
          <span style={{ color: "#F30" }}>Break Out System</span>, enhanced by
          cutting-edge AI to deliver superior trading results.
        </OverviewBaseTypography>
        <OverviewBaseTypography mb={"12px"}>
          Our advanced algorithms analyze real-time data, adapt to evolving
          trends, and provide reliable, automated signals directly to your
          mobile app ensuring exceptional ROI and effortless execution.
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
