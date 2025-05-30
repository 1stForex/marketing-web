import { Box } from "@mui/material";
import Hero from "@/src/components/Hero";
import CustomButton from "@/src/components/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Hero
      badgeTitle="1st Forex AI Signal"
      bgImagePath="HomeHeroBg.jpg"
      title="Where Cutting-Edge AI Meets 20 Years of Proven Results"
      description="Experience fully automated, AI-powered forex signals backed by two decades of proven success."
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link href="/ai-signal" passHref>
          <CustomButton variant="red">AI Signal</CustomButton>
        </Link>
        <Link href="/academy" passHref>
          <CustomButton variant="transparent">Academy</CustomButton>
        </Link>
      </Box>
    </Hero>
  );
}
