import Banner from "@/src/components/Banner";
import HeadTypography from "@/src/styled/HeadTypography";
import { Box } from "@mui/material";

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
        description="At 1st Forex, we don’t just see ourselves as a company—we are a family of traders. Our mission goes beyond teaching and trading; it’s about building a global community where traders can connect, share, and grow together."
        secondaryDescription="From personalized mentorship to interactive forums, we are committed to creating a supportive environment where every trader can thrive."
      >
        <HeadTypography color="#FFF" textAlign={"center"} maxWidth={"535px"}>
          More Than a Business —A Community
        </HeadTypography>
      </Banner>
    </Box>
  );
}
