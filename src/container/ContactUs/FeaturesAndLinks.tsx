import { Box } from "@mui/material";
import SocialLinks from "@/src/components/SocialLinks";
import FeaturesSection from "@/src/components/FeaturesSection";
import { contactUsFeaturesData } from "@/src/const/contactUsFeaturesData";
import { getTranslations } from "next-intl/server";

const FeaturesAndLinks = async () => {
  const t = await getTranslations("Contact");
  const features = contactUsFeaturesData.map((feature) => ({
    title: t(feature.titleKey),
    description: t(feature.descriptionKey),
    icon: feature.icon,
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <FeaturesSection features={features} />
      <SocialLinks />
    </Box>
  );
};

export default FeaturesAndLinks;
