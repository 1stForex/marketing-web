import { Box } from "@mui/material";
import Hero from "@/src/components/Hero";
import CustomButton from "@/src/components/Button";

export default function HeroSection() {
  return (
    <Hero
      badgeTitle="1st Forex AI Signal"
      bgImagePath="HomeHeroBg.jpg"
      title="Where Cutting-Edge AI Meets 20 Years of Proven Results"
      description="Experience fully automated, AI-powered forex signals backed by two decaded of proven success."
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <CustomButton variant="red">Label</CustomButton>
        <CustomButton variant="transparent">Label</CustomButton>
      </Box>
    </Hero>
  );
}
