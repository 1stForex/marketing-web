import Hero from "@/src/components/Hero";

export default function HeroSection() {
  return (
    <Hero
      badgeTitle="About Us"
      bgImagePath="HomeHeroBg.jpg"
      title="Welcome to 1st Forex: Where"
    >
      <span
        style={{
          color: "#F30",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "100%",
          letterSpacing: "-1.92px",
        }}
      >
        Tradition Meets Innovation
      </span>
    </Hero>
  );
}
