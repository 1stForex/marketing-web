import { Box } from "@mui/material";
import CustomButton from "@/src/components/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CtaSection = () => {
  const t = useTranslations("Academy");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Link href="/ai-signal" passHref>
        <CustomButton variant="transparent">{t("cta.signals")}</CustomButton>
      </Link>
      <Link href="/academy" passHref>
        <CustomButton variant="red">{t("cta.academy")}</CustomButton>
      </Link>
    </Box>
  );
};

export default CtaSection;
