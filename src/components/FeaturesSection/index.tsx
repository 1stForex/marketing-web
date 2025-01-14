import { Box } from "@mui/material";
import FeatureCard from "@/src/components/FeatureCard";
import { FeatureCardProps } from "@/src/types/FeatureCard.interface";

interface FeaturesSectionProps {
  features: FeatureCardProps[];
}
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        "@media (max-width: 992px)": {
          flexDirection: "column",
          gap: "16px",
        },
        "@media (max-width: 576px)": {
          gap: "8px",
        },
      }}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </Box>
  );
};

export default FeaturesSection;
