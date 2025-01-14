import Hero from "@/src/components/Hero";
import { Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Hero
      badgeTitle="About Us"
      bgImagePath="AboutUsBg.jpg"
      title="Welcome to 1st Forex: Where"
    >
      <Typography
        sx={{
          color: "#F30",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "100%",
          letterSpacing: "-1.92px",
          textAlign: "center",

          "@media (max-width: 768px)": {
            fontSize: "38px",
          },

          "@media (max-width: 576px)": {
            fontSize: "28px",
          },
        }}
      >
        Tradition Meets Innovation
      </Typography>
    </Hero>
  );
}
