import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import { Box } from "@mui/material";
import OverviewBaseTypography from "./OverviewBaseTypography";
import { getTranslations } from "next-intl/server";

const Overview = async () => {
  const t = await getTranslations("Home.overview");
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
          {t.rich("first", {
            accent: (chunks) => (
              <span style={{ color: "var(--primary-400-base, #F30)" }}>
                {chunks}
              </span>
            ),
          })}
        </OverviewBaseTypography>
        <OverviewBaseTypography>
          {t.rich("second", {
            accent: (chunks) => (
              <span style={{ color: "var(--primary-400-base, #F30)" }}>
                {chunks}
              </span>
            ),
          })}
        </OverviewBaseTypography>
      </Box>
    </Box>
  );
};

export default Overview;
