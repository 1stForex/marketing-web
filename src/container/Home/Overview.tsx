import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import { Box } from "@mui/material";
import HomeOverViewTypography from "@/src/styled/HomeOverViewTypography";

const Overview = () => {
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
        <HomeOverViewTypography
          sx={{
            mb: "12px",
          }}
        >
          For over twenty years, 1st Forex has helped traders worldwide develop
          <span style={{ color: "var(--primary-400-base, #F30)" }}>
            {" "}
            profitable strategies
          </span>{" "}
          and achieve their financial goals.
        </HomeOverViewTypography>
        <HomeOverViewTypography>
          From comprehensive courses to
          <span style={{ color: "var(--primary-400-base, #F30)" }}>
            {" "}
            powerful trading
          </span>{" "}
          signals and a vibrant community, we offer the tools, insights, and
          expertise to
          <span style={{ color: "var(--primary-400-base, #F30)" }}>
            {" "}
            elevate
          </span>{" "}
          your trading experience.
        </HomeOverViewTypography>
      </Box>
    </Box>
  );
};

export default Overview;
