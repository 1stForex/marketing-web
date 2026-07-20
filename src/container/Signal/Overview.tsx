import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import { Box } from "@mui/material";
import OverviewBaseTypography from "./OverviewBaseTypography";
import { useTranslations } from "next-intl";

export default function Overview() {
  const t = useTranslations("Signal");
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
        <Image src={Logo} alt={t("logoAlt")} />
      </Box>
      <Box>
        <OverviewBaseTypography mb={"12px"}>
          {t("overview.paragraph1")}
        </OverviewBaseTypography>
        <OverviewBaseTypography mb={"12px"}>
          {t("overview.paragraph2")}
        </OverviewBaseTypography>
        <OverviewBaseTypography>
          {t("overview.paragraph3")}
        </OverviewBaseTypography>
      </Box>
    </Box>
  );
}
