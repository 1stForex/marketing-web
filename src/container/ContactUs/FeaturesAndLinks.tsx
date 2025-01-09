import { Box } from "@mui/material";
import FeatureCard from "@/src/components/FeatureCard";
import Chat from "@/src/assets/icons/chat.svg";
import Mail from "@/src/assets/icons/mail.svg";
import SocialLinks from "@/src/components/SocialLinks";

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
      <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <FeatureCard
          title="Live Chat"
          description="Get instant Help From our Support"
          icon={Chat}
        />
        <FeatureCard
          title="support@1forex.com"
          description="Get instant Help From our Support"
          icon={Mail}
        />
        <FeatureCard
          title="Request a callback"
          description="Instant help from our support"
          icon={Mail}
        />
      </Box>

      <SocialLinks />
    </Box>
  );
};

export default FeaturesAndLinks;
