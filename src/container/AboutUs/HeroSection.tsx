import Hero from "@/src/components/Hero";
import { Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Hero badgeTitle="About Us" bgImagePath="HomeHeroBg.jpg">
      <Typography
        sx={{
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "100%",
          letterSpacing: "-1.92px",
          textAlign: "center",
          maxWidth: "734px",

          "@media (max-width: 768px)": {
            fontSize: "38px",
          },

          "@media (max-width: 576px)": {
            fontSize: "28px",
          },
        }}
      >
        Welcome to 1st Forex: Where{" "}
        <span style={{ color: "#F30" }}>Tradition Meets Innovation</span>
      </Typography>
    </Hero>
  );
}
