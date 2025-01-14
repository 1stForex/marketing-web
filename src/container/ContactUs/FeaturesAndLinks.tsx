import { Box } from "@mui/material";
import SocialLinks from "@/src/components/SocialLinks";
import FeaturesSection from "@/src/components/FeaturesSection";
import { contactUsFeaturesData } from "@/src/const/contactUsFeaturesData";

const FeaturesAndLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <FeaturesSection features={contactUsFeaturesData} />
      <SocialLinks />
    </Box>
  );
};

export default FeaturesAndLinks;
