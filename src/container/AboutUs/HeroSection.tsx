import Hero from "@/src/components/Hero";
import HeadTypography from "@/src/styled/HeadTypography";

export default function HeroSection() {
  return (
    <Hero badgeTitle="About Us" bgImagePath="HomeHeroBg.jpg">
      <HeadTypography textAlign={"center"} maxWidth={"734px"}>
        Welcome to 1st Forex: Where{" "}
        <span style={{ color: "#F30" }}>Tradition Meets Innovation</span>
      </HeadTypography>
    </Hero>
  );
}
