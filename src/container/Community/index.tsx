import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import OfferSection from "./OfferSection";
import Offer from "@/src/components/Offer";
import JoinSection from "./JoinSection";
import communityMobile from "@/src/assets/images/mobile-community.png";

export default function Community() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        overflowX: "hidden",
        mb: "80px",
        "@media (max-width: 768px)": {
          gap: "60px",
          mb: "60px",
        },

        "@media (max-width: 576px)": {
          gap: "40px",
          mb: "40px",
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",

            "@media (max-width: 768px)": {
              gap: "40px",
            },
          }}
        >
          <HeroSection />
          <OfferSection />
        </Box>
      </Container>
      <Offer
        badgeTitle="Get 1st Forex"
        title="How to Join the"
        specialTitle="Conversation?"
        points={[
          "Create an account on 1st Forex to access the blog, signals, and courses.",
          "Engage with content by asking questions, sharing insights, and applying for contributor status. ",
        ]}
        imageUrl={communityMobile.src}
      />
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1220px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px",

            "@media (max-width: 768px)": {
              gap: "40px",
            },
          }}
        ></Box>
        <JoinSection />
      </Container>
    </Box>
  );
}
