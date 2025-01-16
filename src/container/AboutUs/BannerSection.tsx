import Banner from "@/src/components/Banner";
import { Box, Typography } from "@mui/material";

export default function BannerSection() {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/HomeHeroBg.jpg')`,
        boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Banner
        badgeTitle="Vision"
        description="At 1st Forex, we don’t just see ourselves as a company—we are a family of traders. Our mission goes beyond teaching and trading; it’s about building a global community where traders can connect, share, and grow together. From personalized mentorship to interactive forums, we are committed to creating a supportive environment where every trader can thrive."
      >
        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            maxWidth: "535px",

            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          More Than a Business —A Community
        </Typography>
      </Banner>
    </Box>
  );
}
