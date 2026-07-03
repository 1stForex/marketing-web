import { Box } from "@mui/material";
import Hero from "@/src/components/Hero";
import CustomButton from "@/src/components/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Hero
      badgeTitle="1st Forex Trading Signals"
      bgImagePath="HomeHeroBg.jpg"
      title="Trading Signals Built on 20 Years of Market Experience"
      description="Get structured forex signals backed by historical performance, disciplined execution, and practical trade planning."
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link href="/ai-signal" passHref>
          <CustomButton variant="red">Trading Signals</CustomButton>
        </Link>
        <Link href="/academy" passHref>
          <CustomButton variant="transparent">Academy</CustomButton>
        </Link>
      </Box>
    </Hero>
  );
}
